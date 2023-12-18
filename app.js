const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const userRoutes = require('./routes/user');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/User', userRoutes);

sequelize.sync()
  .then(() => {
    app.listen(PORT);
  })
  .catch((error) => console.error(error));
