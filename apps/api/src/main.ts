/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { getAllProducts, getProduct } from './app/products.repository';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(getAllProducts());
});

app.get('/api/products/:id', (req, res) => {
  res.send(getProduct(req.params.id));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
