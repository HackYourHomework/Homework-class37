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
//app.use(express.urlencoded({ extended: false }));
console.log('hiep hiep hoorea');

app.post('/weather', (req, res) => {
  const { cityName } = req.body;
  res.send(cityName);
});
