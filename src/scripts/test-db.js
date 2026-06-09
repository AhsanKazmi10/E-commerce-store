const mongoose = require('mongoose');

// YAHAN APNI REAL URI DALO (testing ke liye)
const MONGODB_URI = 'mongodb+srv://syedahsankazmi95_db_user:UAK1lKV6cW4uzfqG@cluster0.xxx.mongodb.net/ecommerce';

async function testConnection() {
  try {
    console.log('📡 Testing connection...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected!');
    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ Failed:', error.message);
  }
}

testConnection();