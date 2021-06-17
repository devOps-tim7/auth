import dotenv from 'dotenv';
dotenv.config();
import { createServer } from './server';

const app = createServer();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server has started at http://localhost:${port}`);
});
