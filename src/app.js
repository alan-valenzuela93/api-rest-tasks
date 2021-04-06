//Este archivo contiene la informacion de server
import express from 'express';
import TasksRoutes from './routes/tasks.routes';
import morgan from 'morgan';
import cors from 'cors';
//apidocs para documentar la api


const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); // para que se acepten documentos html

// routes
app.get('/', (req, res) => {
    res.json({ messsage: 'Welcome human!' })
});

app.use('/api/tasks', TasksRoutes);

export default app;