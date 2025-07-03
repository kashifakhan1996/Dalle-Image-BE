
import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const connectDB = async (url,db_name) => {
  try {
    await mongoose.connect(url, {
      dbName: db_name || 'default',
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;

