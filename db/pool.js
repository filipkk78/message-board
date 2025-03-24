const { Pool } = require("pg");
require("dotenv").config();

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: `postgresql://postgres:${process.env.DB_PWD}@db.umpmfqqaqeeefytgcubl.supabase.co:5432/postgres`,
});
