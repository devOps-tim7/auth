import dotenv from 'dotenv';
dotenv.config();
require('express-async-errors');
import express from 'express';
import cors from 'cors';
import errorHandler from './src/middleware/ErrorHandler';
import AuthRoute from './src/routes/Auth';
import metricsMiddleware from './src/middleware/MetricsMiddleware';
import MetricsRoutes from './src/routes/Metrics';

export const createServer = () => {
  const app = express();
  app.use(express.json({ limit: '8mb' }));
  app.use(cors());
  app.use(metricsMiddleware);
  app.use('/metrics', MetricsRoutes);
  app.use('/api/auth', AuthRoute);
  app.use(errorHandler);
  return app;
};
