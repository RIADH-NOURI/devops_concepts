import dotenv from 'dotenv';

// Load .env.test during testing, .env.local during dev
const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env.local';
dotenv.config({ path: envFile });

export default envFile;