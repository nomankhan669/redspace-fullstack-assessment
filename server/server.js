import express from 'express';
import cors from 'cors';
import SwapiRoutes from './routes/swapi.routes.js';
const app = express();
const port = 8088;

app.use(cors());
app.use('/', SwapiRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
})