import { NextFunction, Request, Response } from 'express';
import emailQueue from '../queues/emailQueue';

export const sendMail = async (req: Request, res: Response, _next: NextFunction) => {
  emailQueue.add({ email: req.params.email });
  res.send('Job added to queue');
};
