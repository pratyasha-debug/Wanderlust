const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{type: String,
    required:true
    }
});

userSchema.plugin(passportLocalMongoose); // it automatically implement username,hashing ,salting , hashed password
//Now you don’t need to define username or password manually in the schema — the plugin does it for you under the hood.



module.exports = mongoose.model('User', userSchema);