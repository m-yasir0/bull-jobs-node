import { Router } from 'express';
import { sendMail } from '../controllers/mailerController';

const router = Router();

router.post('/send/:email', sendMail);

export default router;
