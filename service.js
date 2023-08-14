import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import teamRouter from './routes/teamRoute.js';

const port = process.env.PORT || 6952;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

db.sync()
  .then(() => {
    console.log('Database connected!');
  })
  .catch((err) => {
    console.log('Failed to sync database', err);
  });

app.use('/api/teams', teamRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
