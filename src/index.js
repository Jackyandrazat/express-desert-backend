require('dotenv').config()

const PORT = process.env.PORT || 5000;

const express = require('express')
const DesertRoutes = require('./router/desert')

const MiddlewarelogRequest = require('./middleware/logs.js')


const app = express()

app.use(MiddlewarelogRequest);
app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/deserts', DesertRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})