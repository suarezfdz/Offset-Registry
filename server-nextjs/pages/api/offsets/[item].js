// pages/api/offsets/[item].js
import { sql } from '@vercel/postgres';

const getOffsetProject = async (req, res) => {
  const { item } = req.query;

  try {
    const result = await sql`
      SELECT *
      FROM registryoffsetprojects
      WHERE id = ${item}
    `;

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const offsetProject = result.rows[0];
    res.json(offsetProject);
  } catch (error) {
    console.error('Error fetching offset project details', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getOffsetProject;
