const { Pool } = require('pg');
const xlsx = require('xlsx');

// PostgreSQL configuration
const pool = new Pool({
  user: process.env.DB_USER || 'user',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'mydb',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 4000,
});

// Read Excel file
const workbook = xlsx.readFile('data/data.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const urlRegex = /'/gi;
const newUrl = "";

// Define PostgreSQL table name
const tableName = 'offset_projects';

// Convert Excel data to an array of objects
const data = xlsx.utils.sheet_to_json(sheet, { header: 1, blankrows : false });

const numberOfColumns = data[0].length;

console.log("Number of columns: " + numberOfColumns);
console.log("Number of rows: " + (data.length - 1));

const sanitizeAndFormatColumn = (arr, numberOfColumns) => {

const formattedValues = arr.slice(1).map(innerArray => {
  const aux = Array.from({ length: numberOfColumns }, (_, i) => {
    const item = innerArray[i];
    return item !== undefined ? `'${item.toString().replace(urlRegex, newUrl)}'` : 'NULL';
  });
  return `(${aux.join(', ')})`;
}).join(', ');

const statement = `INSERT INTO ${tableName} ("${data[0].join('","')}") VALUES ${formattedValues};`;

// Execute the INSERT INTO query
pool.query(statement, (err, result) => {
  if (err) {
    console.error('Error inserting data:', err);
  } else {
    console.log('Data inserted successfully.');
  }
});

return formattedValues;
};

// Insert empty items into the multi-dimensional array
const insertValues = sanitizeAndFormatColumn(data, numberOfColumns);


// Close the PostgreSQL connection
pool.end();
