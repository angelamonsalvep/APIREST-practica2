import MongoClient from 'mongoose';
require ("dotenv").config();

export async function connect(){
    const client= await MongoClient.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB atlas'))
    .catch((error) => console.error(error));
}

