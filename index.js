const express = require('express');
const app = express();




app.get('/' , (req, res) => {
    res.send('Hello')
})





const port = process.env.PORT || 8080;
app.listen(port , () => {
    console.log(port , 'shi port ishga tushdi');
})
