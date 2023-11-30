const { Client } = require('pg');

const dbConfig = {
  user: 'postgres',
  host: 'localhost', 
  database: 'test3',
  password: '1234',
  port: 5432, 
};

const client = new Client(dbConfig);

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    return client.query('SELECT table_name FROM information_schema.tables WHERE table_schema = $1', ['public']);
  })
  .then(result => {
    const tables = result.rows.map(row => row.table_name);
    console.log('List of tables:', tables);
  })
  .catch(err => console.error('Error connecting to PostgreSQL database', err))
  .finally(() => {
    client.end();
  });
