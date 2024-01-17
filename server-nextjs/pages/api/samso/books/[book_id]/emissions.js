// pages/api/offsets/[item].js
import { sql } from '@vercel/postgres';

const getBooksEmissions = async (req, res) => {
  const { book_id } = req.query;

//  console.log(book_id)

  try {
    const result = await sql`
      SELECT *
      FROM emissions
      WHERE book_id = ${book_id};
    `;

//    console.log(result.rows)

    if (result.rows.length == 0) {
      return res.status(404).json({ error: 'Emissions not found for the book' });
    }

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching emissions', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getBooksEmissions;
