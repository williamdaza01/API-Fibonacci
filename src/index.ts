import express, { Application } from 'express';
import bodyParser from 'body-parser';
import fibonacciRoutes from './Routers/fibonacciRoutes';

const app: Application = express();
const port: number = 3000;

app.use(bodyParser.json());

app.use('/', fibonacciRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
