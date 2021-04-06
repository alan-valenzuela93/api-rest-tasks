//Este archivo contiene la definicion de las rutas

import { Router } from 'express';
import * as TaskCtrl from '../controllers/taskcontroller';

const router = Router();

router.get('/', TaskCtrl.findAllTask);

router.post('/', TaskCtrl.createTask);

router.get('/done', TaskCtrl.findAllDoneTask)

router.get('/:id', TaskCtrl.findOneTask);

router.delete('/:id', TaskCtrl.deleteTask);

router.put('/:id', TaskCtrl.updateTask);


export default router;
