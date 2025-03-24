const { Pool } = require("pg");
require("dotenv").config();

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: `postgresql://postgres.umpmfqqaqeeefytgcubl:${process.env.DB_PWD}@aws-0-eu-central-1.pooler.supabase.com:6543/postgres`,
});
