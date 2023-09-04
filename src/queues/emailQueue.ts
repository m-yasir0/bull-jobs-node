import Bull, { Job } from 'bull';
import transporter from '../services/mailerService';
import { jobConfig } from './queueConfig';
import { mailerJobType } from './types';

const emailQueue = new Bull('email-job', jobConfig);

emailQueue.process(async (job: Job<mailerJobType>) => {
  transporter.sendMail({
    from: '"Muhammad Yasir" <yasir.dev0@gmail.com>',
    to: job.data.email,
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>',
  });
  console.log('ok in mailer job', job.data.email);
});

emailQueue.on('error', (err) => {
  console.log(err);
});

export default emailQueue;
