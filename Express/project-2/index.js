const express = require('express')
const path = require('path')

const cookieParser = require('cookie-parser')
const {LoggedInUsersOnly} = require('./middleware/auth')

const {connectToMongoDb} = require('./connect')
const URL = require('./models/url')

require('dotenv').config();
connectToMongoDb(process.env.MONGO_URL)


// routers
const urlRouter = require('./routes/url')
const staticRouter = require('./routes/staticRouter')
const userRouter = require('./routes/user')


const app = express()
const PORT = 8001;

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())

app.use('/url', LoggedInUsersOnly, urlRouter)
app.use('/', staticRouter)
app.use('/user', userRouter)

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))


app.get('/test', async (req, res) => {
    const allUrls = await URL.find({});
    res.render('home', {
        urls: allUrls
    })
})


app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push:{
                visitHistory:{
                    timestamp: Date.now()
                } 
            }
        }
    )
    res.redirect(entry.redirectURL)
})


app.listen(PORT, () => console.log('Server Started'))