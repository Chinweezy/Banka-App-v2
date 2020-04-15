import express from 'express';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import debug from 'debug';
import 'dotenv/config';

// Directories
import routes from './routes';


const app = express();
const port = process.env.PORT || 3000;
const print = debug('dev');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(301).redirect('/api/v1/'));
// app.get('/', (req, res) => {res.send('Hello darkness my old friend!');});
app.use('/api/v1', routes);

app.use('*', (req, res) => {
  res.status(400).send({ message: 'Bazinga! Wrong route' });
});

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    err: {
      message: err.message,
    },
  });
});

app.listen(port, () => {
  print(`Listening on port ${chalk.blue(port)}`);
});

export default app;
