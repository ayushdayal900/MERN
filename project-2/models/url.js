const mongoose = require('mongoose')

// schema
const urlSchema = mongoose.Schema({
    shortId:{
        type: String,
        require: true,
        unique: true
    },
    originalId:{
        type: String,
        require: true
    },
    visitHistory:[
        {timestamp: {type: Number} }
    ]
}, 
{   timestamps: true}
)

const URL = mongoose.model('urls', urlSchema)
