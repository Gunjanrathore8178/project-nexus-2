const mongoose = require("mongoose");
const fconnect = mongoose.connect("mongodb+srv://rathoregunjan87:zpKWrV9bEL9HEsEq@project-nexus-3.tz3sx6p.mongodb.net/?retryWrites=true&w=majority&appName=project-nexus-3");



fconnect.then(() => {
    console.log("Database connected successfully ");
})
    .catch(() => {
        console.log("Database cannot be connected ");
    });

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
});

const feedbackcollection = new mongoose.model("feedback", feedbackSchema);
module.exports = feedbackcollection;