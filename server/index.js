const express = require('exrpess');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Meower'
  });
});

app.listen(5000, () => {
  console.log('Litening on http://localhost:5000')
});