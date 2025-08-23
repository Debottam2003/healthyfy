import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    connectionString: 'postgresql://postgres.klkpybbgsjpkgwurrxkw:okudera2003@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres',
    max: 100,
});

export default pool;