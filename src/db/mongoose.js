const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://babrerushabh1:87wmI7FDT2if5BR3@demo3.ccltont.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser : true,
    }
)

const db = mongoose.connection;

db.on('error', (error) => {
    console.log('Database not connected due to :',error);
});

db.once('open',() => {
    console.log('Connected to database');
});

module.exports = mongoose;