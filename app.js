require("dotenv").config()
const express = require("express");
const app = express();

const cors = require("cors")
app.use(cors());

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());

const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')
const Authentication = require('./middleware/auth')
const listRoute = require('./routes/listRoute')

app.use("/", registerRoute)
app.use("/", loginRoute)
app.use("/", Authentication, listRoute)

module.exports = app



//const fileUpload = require("express-fileupload");
// const registerRoute = require("./Routes/Registration");
// const loginRoute = require("./Routes/Login")
// const Authentication = require("./middleware/middleware");
// const postRoute = require("./Routes/Post");

// app.use(fileUpload({
//     useTempFiles: true
// }))