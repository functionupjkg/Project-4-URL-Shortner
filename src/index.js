const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')
const app = express();


app.use(express.json())


mongoose.connect("mongodb+srv://Jyoti273-db:djukOqR9QbI5Itvc@cluster0.nzuylps.mongodb.net/Project4-Url-db",{
    useNewUrlParser: true
})

.then(() => console.log('Mongodb is Connected'))
.catch(err => console.log(err))


app.use('/', route)



app.listen(3000, function () {
    console.log('Express app running on port ' + 3000)
});






