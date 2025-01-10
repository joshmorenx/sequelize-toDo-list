import { Router } from "express";
import GetAllTasks from "../controllers/GetAllTasks";
import CreateFirstTask from "../controllers/CreateFirstTask";

export default function taskRoutes(): Router {
    const router = Router();

    router.get('/api/tasks', GetAllTasks)
    router.post('/api/tasks', CreateFirstTask)

    return router;
}