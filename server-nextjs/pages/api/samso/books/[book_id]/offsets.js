


// pages/api/hello.js
import { sql } from '@vercel/postgres';

const  getBooksOffsetProjects = async (req, res) => {

    if (req.method === 'GET') {
      const { book_id } = req.query;

      try {
        const result = await sql`
          SELECT *
          FROM samso_offset_projects
          WHERE book_id = ${book_id}
          ORDER BY category;
        `;

        if (result.rows.length == 0) {
          return res.status(404).json({ error: 'Offset Projects not found for the book' });
        }

        res.json(result.rows);
      } catch (error) {
        console.error('Error fetching offset projects by year and category', error);
        res.status(500).json({ error: 'Internal server error' });
      }

    } else if (req.method === 'POST') {
        try {
            // Extract data from the request body
            const {
              id,
              name,
              reference,
              status,
              available_credits,
              registry,
              type,
              methodology,
              region,
              year,
              developer
            } = req.body;


            console.log(id);

            let result;
            if (id == null) {
              result = await sql`
                INSERT INTO samso_offset_projects (id, name, reference, status, available_credits, registry, type, methodology, region, developer, year)
                VALUES (${id}, ${name}, ${reference}, ${status}, ${available_credits}, ${registry}, ${type}, ${methodology}, ${region}, ${developer}, ${year})
                RETURNING *;
              `;

            } else {
              result = await sql`
                UPDATE samso_offset_projects
                SET
                  name = ${name},
                  reference = ${reference},
                  status = ${status},
                  available_credits = ${available_credits},
                  registry = ${registry},
                  type = ${type},
                  methodology = ${methodology},
                  region = ${region},
                  year = ${year},
                  developer = ${developer}
                WHERE id = ${id}
                RETURNING *;
              `;
            }

            // Respond with the inserted item
            res.json(result.rows[0]);
        } catch (error) {
            console.error('Error inserting / updating offset project:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
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
    await getBooksOffsetProjects(req, res);
};
