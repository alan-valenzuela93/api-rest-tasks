import { config } from 'dotenv' 
config()

export default {
    mongodbUri : process.env.MONGODB_URI || 'mongodb://localhost/taskdb',

}