const mongoose = require('mongoose')
mongoose.Promise = global.Promise // usa o promise do JS, para tirar o warnig pois o do mongoose esta depreciado
module.exports = mongoose.connect('mongodb://localhost:27017/todo', function (err, db){
    if (err) 
        console.log(err);
})