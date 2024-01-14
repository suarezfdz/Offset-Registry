// pages/api/hello.js
import { sql } from '@vercel/postgres';

const  getBooks = async (req, res) => {

    if (req.method === 'GET') {
        const { page = 1, pageSize = 10, search = '' } = req.query;
        const offset = (page - 1) * pageSize;

        try {
            const result = await sql`
                SELECT id, *
                FROM samso_books
                WHERE "entity" ILIKE ${`%${search}%`}
                ORDER BY id
                LIMIT ${pageSize}
                OFFSET ${offset}
            `;

            const totalCount = await sql`
               SELECT id, *
               FROM samso_books
               WHERE "entity" ILIKE ${`%${search}%`}
           `;

            res.header('X-Total-Count', totalCount.rows[0].count);
            console.log(totalCount.rows[0].count)
            res.json(result.rows);
        } catch (error) {
            console.error('Error fetching items', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else if (req.method === 'POST') {
        try {
            // Extract data from the request body
            const {
              entity,
              type,
              parent,
              lei,
              baseyear,
              targetyear
            } = req.body;

            console.log(req.body)

            // Perform the PostgreSQL insertion
            const result = await sql`
                INSERT INTO samso_books (entity, type, parent, lei, base, target)
                VALUES (${entity}, ${type}, ${parent}, ${lei}, ${baseyear}, ${targetyear}) RETURNING *
            `;

            // Respond with the inserted item
            res.json(result.rows[0]);
        } catch (error) {
            console.error('Error inserting book:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

// API endpoint for fetching details of parent items
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

// API endpoint for fetching emissions of a specific book
const getEmissions = async (req, res) => {
  const { bookId } = req.params;

  try {
    const result = await sql`
      SELECT *
      FROM emissions
      WHERE book_id = ${bookId}
    `;

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Emissions not found for the book' });
    }

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching emissions', error);
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
  if (req.method === 'GET' && req.url === '/api/samso/books/parents') {
    await getParents(req, res);
  } else if (req.method === 'GET' && req.url.match(/^\/api\/samso\/books\/\d+\/emissions$/)) {
    // The regular expression matches paths like '/api/samso/books/123/emissions'
    await getEmissions(req, res);
  } else {
    await getBooks(req, res);
  }
};