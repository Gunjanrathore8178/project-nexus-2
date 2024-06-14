const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://rathoregunjan87:zpKWrV9bEL9HEsEq@project-nexus-3.tz3sx6p.mongodb.net/?retryWrites=true&w=majority&appName=project-nexus-3");



connect.then(() => {
    console.log("Database connected successfully ");
})
    .catch(() => {
        console.log("Database cannot be connected ");
    });

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});



const collection = new mongoose.model("users", LoginSchema);
module.exports = collection;
