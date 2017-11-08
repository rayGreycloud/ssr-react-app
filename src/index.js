import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  
  // Initialize and load data into store 
  
  res.send(renderer(req, store));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
