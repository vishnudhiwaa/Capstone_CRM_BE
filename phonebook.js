
const mongoose = require('mongoose')

const PhoneBookSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        require : true
    }
})

const PhoneBook = mongoose.model('PhoneBook',PhoneBookSchema)

module.exports = PhoneBook
