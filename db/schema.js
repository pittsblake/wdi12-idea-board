const mongoose = require('mongoose');

const Schema = mongoose.Schema


const ideaSchema = new Schema ({
    title: {
        type: String,
        default: "New Title"
    },
    description: String,
    createdAt: {type: Date}
})




const userSchema = new Schema ({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ideas: [ideaSchema]

})


const Idea = mongoose.model('Idea', ideaSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    Idea, User
}