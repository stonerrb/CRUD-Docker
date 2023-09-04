const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://babrerushabh1:<password>@students.aqeubyi.mongodb.net/',{
        useNewUrlParser : true
    }
)

module.exports = mongoose;