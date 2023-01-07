const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    Activity:{type:String , required:true},
    Status:{type:String},
    Time_taken:{type:String},
    Action: {type: String}
},{timestamps:true})

const listModel = mongoose.model('lists' , listSchema)

module.exports = listModel
