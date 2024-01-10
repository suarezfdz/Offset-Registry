// pages/api/hello.js
import { sql } from '@vercel/postgres';

const getProjects = async (req, res) => {
  const { page = 1, pageSize = 10, search = '' } = req.query;
  const offset = (page - 1) * pageSize;

  try {

    const result = await sql`
          SELECT id, projectid, projectname
          FROM registryoffsetprojects
          WHERE projectname ILIKE ${`%${search}%`}
          ORDER BY id
          LIMIT ${pageSize}
          OFFSET ${offset}
        `;

    const totalCount = await sql`
      SELECT COUNT(*)
      FROM registryoffsetprojects
      WHERE projectname ILIKE ${`%${search}%`}
    `;

    res.setHeader('X-Total-Count', totalCount.rows[0].count);
//    console.log(totalCount.rows[0].count)
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching items', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getProject = async (req, res) => {
  const { itemId } = req.params;

  try {

      const result = await sql`
            SELECT *
            FROM registryoffsetprojects
            WHERE WHERE id =  ${itemId}`;

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const item = result.rows[0];
    res.json(item);
  } catch (error) {
    console.error('Error fetching item details', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const handleErrors = (e, res) => {
  if (e.message.includes('relation "users" does not exist')) {
    console.log('Table does not exist, creating and seeding it with dummy data now...');
    // Table is not created yet
    seedAndGetData(req, res);
  } else {
    console.error(e);
    res.status(500).json({ message: "Inter nal Server Error" });
  }
};

// Default export that calls one of the named exports
export default async (req, res) => {
  // You can choose which function to call based on your requirements
  await getProjects(req, res);
};

export { getProject };