const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

const connectDB = () => {
    try {
        mongoose.connect(url)
        console.log('MongoDB connected... 👍');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;