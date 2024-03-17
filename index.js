const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://modevco:1234modevco@atlascluster.bq01rxm.mongodb.net/modevco')
.then(() => {
    console.log('mongo ishladi');
})

const user = new mongoose.Schema({
    name: String
})

const User = mongoose.model('User' , user)

app.post('/api/create' , async (req , res) => {
    const userData = await User({
        name: "salom"
    })
    const data = await userData.save()
    console.log(data)
})

app.get('/' ,async (req, res) => {
    const data = await User.find()
    console.log(data);
})


 


const port = process.env.PORT || 8080;
app.listen(port , () => {
    console.log(port , 'shi port ishga tushdi');
})
