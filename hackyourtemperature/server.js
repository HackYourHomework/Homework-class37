import express from 'express';
const app = express();
const router = express.Router();

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server is running');
});
app.get('/', (req, res) => {
  res.send('Hello from backend to frontend');
});
app.use(express.json());
router.post('/weather', (req, res) => {
  const { cityname } = req.body;
  res.send(cityname);
});
