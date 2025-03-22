const mongoose = require('mongoose'),
    MONGO_USERNAME = 'root',
    MONGO_PASSWORD = 'goldenrams',
    MONGO_HOSTNAME = 'mongo',
    MONGO_PORT = '27017',
    MONGO_DB = 'sharkinfo',
    url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
    //url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));