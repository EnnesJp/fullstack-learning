import {
  createTableUser,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from './controller/user.js';

import express from 'express';

const app = express();
app.use(express.json());

createTableUser();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/user', getUser);
app.post('/user', createUser);
app.put('/user/:id', updateUser);
app.delete('/user/:id', deleteUser);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});