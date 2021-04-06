import mongoose from 'mongoose';
import config from './config';



(async () => { //anonymous function
    try {
        const db = await mongoose.connect(config.mongodbUri, { //connection to database
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database is connected to ', db.connection.name);  
    } catch (error) {
        console.log(error)
    }
})();

