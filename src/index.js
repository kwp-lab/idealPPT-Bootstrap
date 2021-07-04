const path = require('path')
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const Vika = require('@vikadata/vika').default;


app.get('/', async (req, res) => {

  res.sendFile(path.join(__dirname, 'public/index.html'));
})


app.use('/assets', express.static('public/assets'))

// Error handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;
