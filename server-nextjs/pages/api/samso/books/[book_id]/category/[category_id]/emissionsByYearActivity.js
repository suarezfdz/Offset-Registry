// pages/api/offsets/[item].js
import { sql } from '@vercel/postgres';

const getBooksEmissionsByYearActivity = async (req, res) => {
  const { book_id, category_id } = req.query;

  try {
    const result = await sql`
      SELECT emission_id, book_id, category, activity, year, emission_value::float
      FROM emissions
      WHERE book_id = ${book_id} AND category = ${category_id}
      ORDER BY year, activity;
    `;

    if (result.rows.length == 0) {
      return res.status(404).json({ error: 'Emissions not found for the book' });
    }

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching emissions by year and activity', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getBooksEmissionsByYearActivity;
