import express from 'express';
import bodyParser from 'body-parser';
import rootRouter from './routes';

const app = express();
const port = process.env.PORT || 5555;

app.use(bodyParser.json());
app.use('/api', rootRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
