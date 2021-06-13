const mongoose = require('mongoose');

// Initalize Schema
const Schema = mongoose.Schema

// Define a QuizSchema
const QuizSchema = new Schema({
    title: String,
    totalMarks: Number,
    time: Number,
    subject: String,
    questions: [
      {  mark: Number,
        que: String,
        option1: String,
        option2: String,
        option3: String,
        option4: String,
        correctOption: String}
    ],


});

// Define and Export Model
const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;
