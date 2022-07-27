const { model, Schema } = require('mongoose');
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)
module.exports = model('User', userSchema);

