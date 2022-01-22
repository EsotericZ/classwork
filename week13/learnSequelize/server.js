const express = require('express');

const sequelize = require('./config');
const routes = require('./routes');

const Book = require('./models/Book');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});