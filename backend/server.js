import express, { urlencoded, json } from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
// load env var
dotenv.config();

const app = express();

// express body parser adding middleware
app.use(urlencoded({ extended: true }));
app.use(json());

// routes
app.get('/', (req, res) => {
  res.send('API is running ....');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
