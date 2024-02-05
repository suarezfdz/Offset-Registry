// pages/api/offsets/[item].js
import { sql } from '@vercel/postgres';

const postEmission = async (req, res) => {
  const { book_id, emission_id, category, activity, year, emission } = req.body;

  if (req.method === 'GET') {
      console.log("GET")

  } else if (req.method === 'POST') {

      console.log(book_id, emission_id, category, activity, year, emission);
      console.log("POST")
      try {

        console.log(emission_id);
        let result;
        if (emission_id == null) {
          result = await sql`
            INSERT INTO emissions (book_id, category, activity, year, emission_value)
            VALUES (${book_id}, ${category}, ${activity}, ${year}, ${emission})
            RETURNING *;
          `;

        } else {
          result = await sql`
            UPDATE emissions
            SET emission_value = ${emission}
            WHERE emission_id = ${emission_id}
            RETURNING *;
          `;
        }

        // Respond with the inserted/updated item
        res.json(result.rows[0]);
      } catch (error) {
        console.error('Error saving emissions', error);
        res.status(500).json({ error: 'Internal server error' });
      }
  } else if (req.method === 'OPTIONS') {
    console.log("OPTIONS")
    res.status(200).end();
  }
};

export default postEmission;
