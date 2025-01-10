import express, { Application, Request, Response } from "express";
import sequelize from "./config/database";
import tableRoutes from "./routes/tableRoutes";
import taskRoutes from "./routes/taskRoutes";
import { table } from "console";
const app: Application = express()

//test connection
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ response: 'Hello World!' })
})

app.use('/', tableRoutes())
app.use('/', taskRoutes())

app.listen(3000, () => {
    console.log(`app running on port http://localhost:3000/`)
})