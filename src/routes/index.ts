import { Router } from 'express';
import * as controller from '../controllers/index';
import mailerRoutes from './mailerRoutes';

export const index = Router();

index.get('/', controller.index);

index.use('/mailer', mailerRoutes);
