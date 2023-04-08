import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', false);

console.log(process.env.DATABASE_URL);

const databaseUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/mjvSchoolNode';

export default mongoose.connect(databaseUrl);
