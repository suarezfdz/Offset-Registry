app.get('/api/data', async (req, res) => {
  const { page = 1, pageSize = 10, search = '' } = req.query;
  const offset = (page - 1) * pageSize;

  try {

   const result = await pool.query(
        `SELECT id, "projectid", "projectname" FROM registryoffsetprojects WHERE "projectname" ILIKE $1 ORDER BY id LIMIT $2 OFFSET $3`,
        [`%${search}%`, pageSize, offset]
      );

    const totalCount = await pool.query('SELECT COUNT(*) FROM registryoffsetprojects WHERE "projectname" ILIKE $1', [`%${search}%`]);

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
    const result = await pool.query('SELECT * FROM registryoffsetprojects WHERE id = $1', [itemId]);

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


// Define the route for getting multiple items by ID
app.post('/api/get-offset-projects-by-ids', async (req, res) => {
  try {
    // Extract IDs from the request body
    const { ids } = req.body;

    console.log(ids);

    // Validate the request body
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    console.log("es un array");

    const arrayOfIntegers = ids.map(Number); // Convert strings to integers


    // Perform the PostgreSQL query
    const result = await pool.query(
      'SELECT * FROM registryoffsetprojects WHERE id IN ($1) ORDER BY id',
      [arrayOfIntegers]
    );

    // Respond with the retrieved items
    res.json(result.rows);
  } catch (error) {
    console.error('Error getting offset projects by IDs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/samso/projects', async (req, res) => {
  const { page = 1, pageSize = 10, search = '' } = req.query;
  const offset = (page - 1) * pageSize;

  try {

   const result = await pool.query(
        `SELECT project_id, * FROM samso_offset_projects WHERE "name" ILIKE $1 ORDER BY project_id LIMIT $2 OFFSET $3`,
        [`%${search}%`, pageSize, offset]
      );

    const totalCount = await pool.query('SELECT COUNT(*) FROM samso_offset_projects WHERE "name" ILIKE $1', [`%${search}%`]);

    res.header('X-Total-Count', totalCount.rows[0].count);
    console.log(totalCount.rows[0].count)
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching items', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/samso/offsets', async (req, res) => {
  try {
    // Extract data from the request body
    const {
      name,
      reference,
      status,
      available_credits,
      registry,
      type,
      methodology,
      region,
      developer,
    } = req.body;

    console.log(req.body)

    // Perform the PostgreSQL insertion
    const result = await pool.query(
      'INSERT INTO samso_offset_projects (name, reference, status, available_credits, registry, type, methodology, region, developer) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [name, reference, status, available_credits, registry, type, methodology, region, developer]
    );

    // Respond with the inserted item
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting offset project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

