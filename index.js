const mongoose = require("mongoose");
const MongoDB_API = "mongodb+srv://root:Saurabh0094@cluster0.uikbayf.mongodb.net/?retryWrites=true&w=majority";
const PORT = 9000;

const app = require("./app");
mongoose.set('strictQuery', true);

 function main() {
    mongoose.connect(MongoDB_API, (err) => {
        if(err) console.log("err>>> " + err);
        else console.log("Connected to Database");
    })

    app.listen(PORT, (err) => {
        if(err) console.log("err>>> " + err);
        else console.log("running on server " + PORT);
    })
} 
main()