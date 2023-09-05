// import dependencies
const express = require('express');
const cors = require('cors');
require('./db/mongoose')

// import routes
const studentRoute = require('./routes/studentRoute');

// ---------------------------- MAIN ------------------------- // 

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());
app.use(studentRoute);


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

module.exports = {app};
