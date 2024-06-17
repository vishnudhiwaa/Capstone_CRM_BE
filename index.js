
const express = require('express')
const cors = require('cors')
const app = express()
// require('dotenv').config()
const dotenv = require('dotenv');
dotenv.config();


app.use(express.json)
app.use(cors())
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}...`)
})

const mongoose = require('mongoose')

const DB = process.env.LINK
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Database connected..')
})

const PhoneBook = require('./model/PhoneBook1')

app.post('/add-phone', async(req,res) => {
    const phoneNumer = new PhoneBook(req.body)
    try{
        await phoneNumber.save()
        res.status(201).json({
            status: 'Success',
            data : {
                phoneNumber
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.get('/', async (req,res) => {
    try{
        res.status(200).json({
        status : 'Success',
        advertisement : ''
    })
}catch(err){
    res.status(500).json({
        status: 'Failed',
        message : err
        })
    }
})

app.get('/get-phone', async (req,res) => {
    const phoneNumbers = await PhoneBook.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                phoneNumbers
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.patch('/update-phone/:id', async (req,res) => {
    const updatedPhone = await PhoneBook.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
    })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedPhone
            }
        })
    }catch(err){
        alert(err)
    }
})

app.delete('/delete-phone/:id', async(req,res)=> {
    await PhoneBook.findByIdAndDelete(req.parms.id)

    try{
        res.status(204).json({
            status : 'Success',
            data : {}
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})
