import dotenv from 'dotenv';
dotenv.config();
import { createServer } from './server';
import RequestStatsMiddleware from './src/middleware/RequestStatsMiddleware';
const app = createServer();

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Server has started at http://localhost:${port}`);
});

RequestStatsMiddleware(server)    

