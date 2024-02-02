// pages/api/offsets/[item].js
import { sql } from '@vercel/postgres';

const getBooksEmissionsByYearCategory = async (req, res) => {
  const { book_id } = req.query;

  try {
    const result = await sql`
      SELECT category, year, sum(emission_value)::int as emission_value
      FROM emissions
      WHERE book_id = ${book_id}
      GROUP BY category, year
      ORDER BY category;
    `;

    if (result.rows.length == 0) {
      return res.status(404).json({ error: 'Emissions not found for the book' });
    }

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching emissions by year and category', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getBooksEmissionsByYearCategory;
