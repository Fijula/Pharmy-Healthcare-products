const mongoose = require('mongoose');
const URI=` mongodb+srv://fijula:fijulaazhikoden@cluster0.snk4t.mongodb.net/healthify?retryWrites=true&w=majority`

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB  
