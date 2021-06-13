const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../server/config');

const Quiz = require('../models/quiz');


router.post('/createQuiz', (req, res) => {

    let newQuiz = new Quiz(req.body);

    newQuiz.save((err,data)=> {
        if (err) {
            res.json({ success: false, msg: 'Failed to Create Quiz' });
        } else {
            console.log(data);
            return res.json({ success: true, msg: 'Quiz Created' });
        }
    });

});

router.get('/getQuiz',  (req, res, next) => {
    Quiz.find({}, (error, response) => {
        if (error) {
            return res.json({ success: false, msg: { error } });
        } else {
            return res.json({ success: true, msg: response });
        }
    });
});


module.exports = router;
