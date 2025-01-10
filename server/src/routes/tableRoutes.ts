import { Router } from "express";
import createAllTables from "../controllers/CreateAllTables";

export default function tableRoutes(): Router {
    const router = Router();

    router.get('/api/tables', (req, res) => {
        res.status(200).json({ response: 'Table routes' })
    })
    router.post('/api/tables', createAllTables)

    return router;
}