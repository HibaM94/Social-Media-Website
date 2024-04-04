const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const Schema = mongoose.Schema;
const CountrySchema = new Schema({
    postedBy:{
        type: ObjectId,
        ref: "User",
    },
    country:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
    },
},{ timestamps:true});

var country = mongoose.model('Country', CountrySchema);

module.exports = country;