import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  
  matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData() : null;
  });
  
  res.send(renderer(req, store));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
