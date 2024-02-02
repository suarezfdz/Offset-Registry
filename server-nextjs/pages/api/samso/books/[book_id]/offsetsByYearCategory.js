// pages/api/offsets/[item].js
import { sql } from '@vercel/postgres';

const getBooksOffsetProjectsByYearCategory = async (req, res) => {
  const { book_id } = req.query;

  try {
    const result = await sql`
      SELECT category, year, count(*)::int as offset_count
      FROM samso_offset_projects
      WHERE book_id = ${book_id}
      GROUP BY category, year
      ORDER BY year, category;
    `;

    if (result.rows.length == 0) {
      return res.status(404).json({ error: 'Offset Projects not found for the book' });
    }

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching offset projects by year and category', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getBooksOffsetProjectsByYearCategory;
