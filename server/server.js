const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {mongoDB} = require('./config');

const rtvagdRoutes = require('./routes/rtvagd.routes.js');

const app = express();

app.use(cors({credentials: true, origin: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`/api`, rtvagdRoutes);

app.use('/api', (req, res) => {
  res.status(404).send({message: 'Not found...'});
});

mongoose.connect(`mongodb+srv://Erem:${mongoDB}@clustererem-2ilyb.mongodb.net/Jeczmienna`, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Succesfully connected to the Database');
});
db.on('error', err => console.log('Error: ' + err));

const port = process.env.PORT || 8000;
app.listen(port, 'localhost', () => {
  console.log('Server is running on port : '+ port);
});