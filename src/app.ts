import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import pino from 'pino-http';
import swaggerUI from 'swagger-ui-express';
import OpenApiConfig from './docs/swagger';
import { AppRoutes } from './routes';
import { errorHandler } from './infrastructure';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(pino());

process.env.NODE_ENV !== 'prod' ? app.use(morgan('dev')) : app.use(morgan('tiny'));

// Docs
app.use('/docs', swaggerUI.serve, swaggerUI.setup(OpenApiConfig));

// Routes
app.use('/api/v1', AppRoutes.routes);

app.use(errorHandler);

export default app;
