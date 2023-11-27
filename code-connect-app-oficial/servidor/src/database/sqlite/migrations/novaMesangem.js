const novaMensagem = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    content TEXT,
    timestamp TEXT DEFAULT (strftime('%H:%M', 'now', 'localtime'))
  );`;

module.exports = novaMensagem;
