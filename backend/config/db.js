const mongoose = require("mongoose")
async function connectDB() {
    try {
        mongoose.connect(process.env.MONOOB_URI)
        console.log("connect to DB")
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connectDB