require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3501;

// Connect to MongoDB
connectDB();

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public/imgs')));

// routes
app.use('/register', require('./routes/system/register'));
app.use('/auth', require('./routes/system/auth'));
app.use('/refresh', require('./routes/system/refresh'));
app.use('/logout', require('./routes/system/logout'));

// Từ Vựng
app.use('/listVocabulary', require('./routes/api/vocabulary/listVocabulary'));
app.use('/vocabularyList', require('./routes/api/vocabulary/vocabularySubject'));

// Ngữ pháp
app.use('/listGrammar', require('./routes/api/grammar/listGrammar'));
app.use('/grammarList', require('./routes/api/grammar/grammarLesson'));

// Ôn tập Ngữ Pháp
app.use('/listPracticeGrammar', require('./routes/api/practice/listPracticeGrammar'));
app.use('/practiceGrammar', require('./routes/api/practice/practiceGrammar'));

// Diễn đàn
app.use('/homePost', require('./routes/api/forum/homePost'));
app.use('/comment', require('./routes/api/forum/comment'));

// Ôn tập
app.use('/scoreVocab', require('./routes/api/user/scoreVocab'));
app.use('/scoreGram', require('./routes/api/user/scoreGram'));

// Xác thực người dùng cần Token
app.use(verifyJWT);
app.use('/users', require('./routes/api/user/users'));
app.use('/changePwd', require('./routes/api/user/changePwd'));


app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});