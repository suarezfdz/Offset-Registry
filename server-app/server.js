const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// PostgreSQL configuration
const pool = new Pool({
  user: process.env.DB_USER || 'user',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'mydb',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 4000,
});

// Express middleware to parse JSON
app.use(express.json());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/api/data', async (req, res) => {
  const { page = 1, pageSize = 10, search = '' } = req.query;
  const offset = (page - 1) * pageSize;

  try {

   const result = await pool.query(
        `SELECT id, "Project ID", "Project Name" FROM offset_projects WHERE "Project Name" ILIKE $1 ORDER BY id LIMIT $2 OFFSET $3`,
        [`%${search}%`, pageSize, offset]
      );

    const totalCount = await pool.query('SELECT COUNT(*) FROM offset_projects WHERE "Project Name" ILIKE $1', [`%${search}%`]);

    res.header('X-Total-Count', totalCount.rows[0].count);
    console.log(totalCount.rows[0].count)
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching items', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint for fetching details of a specific item
app.get('/api/items/:itemId', async (req, res) => {
  const { itemId } = req.params;

  try {
    const result = await pool.query('SELECT * FROM offset_projects WHERE id = $1', [itemId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const item = result.rows[0];
    res.json(item);
  } catch (error) {
    console.error('Error fetching item details', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
