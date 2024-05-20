import { openDB } from "../configDB.js";

export async function createTableUser() {
  const db = await openDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL
    )
  `);
}

export async function getUser(req, res) {
  const db = await openDB();
  const users = await db.all('SELECT * FROM user');
  res.json(users);
}

export async function createUser(req, res) {
  const db = await openDB();
  const { name, email } = req.body;
  await db.run('INSERT INTO user (name, email) VALUES (?, ?)', name, email);
  res.json({ message: 'User created' });
}

export async function updateUser(req, res) {
  const db = await openDB();
  const { name, email } = req.body;
  const { id } = req.params;
  await db.run('UPDATE user SET name = ?, email = ? WHERE id = ?', name, email, id);
  res.json({ message: 'User updated' });
}

export async function deleteUser(req, res) {
  const db = await openDB();
  const { id } = req.params;
  await db.run('DELETE FROM user WHERE id = ?', id);
  res.json({ message: 'User deleted' });
}