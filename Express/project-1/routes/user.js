const express = require('express')

const router = express.Router()


// Create User
router.post('/', (req, res) => {
    const body = req.body;

    const newUser = {
        id: users.length + 1,
        ...body
    };

    users.push(newUser);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to save user'
            });
        }

        return res.status(201).json({
            status: 'success',
            user: newUser
        });
    });
});

// Get Users HTML Page
router.get('/', (req, res) => {
    const html = `
    <html>
        <body>
            <ul>
                ${users.map(user => `<li>${user.first_name}</li>`).join('')}
            </ul>
        </body>
    </html>
    `;
    // always add X to custome header
    res.setHeader('X-madeBy', 'Ayush Dayal')
    res.send(html);
});

router.post('/', async (req, res) => {
    // always add X to custome header
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title ){
        res.status(400).json({"msg":"Incomplete fields"})
    }

    const user = await User.create({
        first_name : body.first_name,
        last_name : body.last_name,
        gender : body.gender,
        email : body.email,
        job_title : body.job_title

    })

    console.log('result: ', result)


    res.setHeader('X-madeBy', 'Ayush Dayal')
    res.status(201).json({'msg': "success"});
});

// Dynamic Routes
router.route('/:id')
.get((req, res) => {
    return res.json('Get req');
})
.put((req, res) => {
    return res.json('Put req');
})
.patch((req, res) => {
    return res.json('Patch req');
})
.delete((req, res) => {
    return res.json('Delete req');
});