const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connecte ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`mongodb error ${error}`);

    }
}

module.exports = connectDB