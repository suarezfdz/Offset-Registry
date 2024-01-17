// pages/apis/samso/books/parents.js
import { sql } from '@vercel/postgres';

const getParents = async (req, res) => {

 try {
    const result = await sql`
      SELECT id, entity
      FROM samso_books
      WHERE type = 'Parent'
    `;

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Parent items not found' });
    }

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching parent items', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getParents;
