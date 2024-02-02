// pages/api/hello.js
import { sql } from '@vercel/postgres';

const  getBooks = async (req, res) => {

    if (req.method === 'GET') {
        const { page = 1, pageSize = 10, search = '' } = req.query;
        const offset = (page - 1) * pageSize;

        try {
            const result = await sql`
                SELECT *
                FROM samso_books b
                WHERE "entity" ILIKE ${`%${search}%`}
                ORDER BY id
                LIMIT ${pageSize}
                OFFSET ${offset}
            `;

            const totalCount = await sql`
                SELECT COUNT(*)
                FROM samso_books
                WHERE "entity" ILIKE ${`%${search}%`}
            `;

            res.setHeader('X-Total-Count', totalCount.rows[0].count);
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
    await getBooks(req, res);
};
