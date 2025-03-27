import express from 'express';
import { BACK_PORT } from './config';
import userRouter from './routes/userRoutes';

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);


app.listen(BACK_PORT, () => {
    console.log(`Backend running on port: ${BACK_PORT}`);
})
