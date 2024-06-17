const mongoose = require("mongoose")
const weblog = new mongoose.Schema({
    ip_address: String,
    user_name: String,
    timestamp: String,
    http_method: String,
    from_page: String,
    to_page: String,
    http_version: String,
    response_code: Number,
    response_size:Number
})
const data=mongoose.model("webdata", weblog);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        enum: ['admin', 'user'],
        
    }
}, { versionKey: false });

const user=mongoose.model("user", userSchema)

module.exports={data,user}