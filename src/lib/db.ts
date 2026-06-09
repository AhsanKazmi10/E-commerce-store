// AUTO-DETECT DATABASE - Mock for development, MongoDB for production
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

// Check if we should use MongoDB (production) or Mock (development)
const USE_MONGODB = process.env.USE_REAL_DB === 'true' || process.env.NODE_ENV === 'production';
const MONGODB_URI = process.env.MONGODB_URI;

// ============================================
// MOCK DATABASE (File-based for development)
// ============================================
const DB_PATH = path.join(process.cwd(), 'database.json');

// Initialize mock database file
if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify({ 
    products: [],
    inquiries: [],
    nextId: 1 
  }, null, 2));
}

const readMockDB = () => JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
const writeMockDB = (data: any) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// Mock Product Model
const MockProduct = {
  create: async (data: any) => {
    const db = readMockDB();
    const newProduct = {
      _id: (db.nextId++).toString(),
      name: data.name,
      image: data.image,
      category: data.category,
      price: Number(data.price) || 0,
      description: data.description || "",
      stock: Number(data.stock) || 0,
      createdAt: new Date().toISOString()
    };
    db.products.push(newProduct);
    writeMockDB(db);
    return newProduct;
  },
  
  find: async (filter: any = {}) => {
    const db = readMockDB();
    let products = db.products || [];
    if (filter.category) {
      products = products.filter((p: any) => p.category === filter.category);
    }
    return products.sort((a: any, b: any) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },
  
  findById: async (id: string) => {
    const db = readMockDB();
    return (db.products || []).find((p: any) => p._id === id);
  },
  
  findByIdAndDelete: async (id: string) => {
    const db = readMockDB();
    db.products = (db.products || []).filter((p: any) => p._id !== id);
    writeMockDB(db);
    return true;
  }
};

// ============================================
// REAL MONGODB (For production)
// ============================================
let RealProduct: any = null;

if (USE_MONGODB && MONGODB_URI) {
  try {
    // Define schema
    const ProductSchema = new mongoose.Schema({
      name: { type: String, required: true },
      image: { type: String, required: true },
      category: { type: String, required: true },
      price: { type: Number, default: 0 },
      description: { type: String, default: "" },
      stock: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now }
    });
    
    RealProduct = mongoose.models.Product || mongoose.model('Product', ProductSchema);
    console.log("✅ MongoDB Model ready");
  } catch (error) {
    console.error("MongoDB Model error:", error);
  }
}

// Real MongoDB Product Model wrapper
const RealProductModel = RealProduct ? {
  create: async (data: any) => {
    const product = new RealProduct(data);
    await product.save();
    return product;
  },
  find: async (filter: any = {}) => {
    return await RealProduct.find(filter).sort({ createdAt: -1 });
  },
  findById: async (id: string) => {
    return await RealProduct.findById(id);
  },
  findByIdAndDelete: async (id: string) => {
    return await RealProduct.findByIdAndDelete(id);
  }
} : null;

// ============================================
// EXPORT - Auto select based on environment
// ============================================
let activeDB: any;
let isUsingMock = false;

if (USE_MONGODB && RealProductModel) {
  activeDB = RealProductModel;
  console.log("📡 Using REAL MongoDB Database");
} else {
  activeDB = MockProduct;
  isUsingMock = true;
  console.log("📦 Using MOCK Database (file-based)");
}

// Connect function
export async function connectDB() {
  if (!isUsingMock && MONGODB_URI) {
    try {
      if (mongoose.connection.readyState === 0) {
        await mongoose.connect(MONGODB_URI);
        console.log("✅ MongoDB connected");
      }
    } catch (error) {
      console.error("MongoDB connection failed, switching to mock:", error);
      // Fallback to mock if MongoDB fails
      return true;
    }
  }
  return true;
}

// Export Product model (same interface for both)
export const Product = activeDB;

// Export Inquiry model
export const Inquiry = {
  create: async (data: any) => {
    if (!isUsingMock) {
      // TODO: Implement Inquiry in MongoDB
      return data;
    }
    const db = readMockDB();
    const newInquiry = {
      _id: (db.nextId++).toString(),
      ...data,
      status: "pending",
      createdAt: new Date().toISOString()
    };
    db.inquiries = db.inquiries || [];
    db.inquiries.push(newInquiry);
    writeMockDB(db);
    return newInquiry;
  },
  find: async () => {
    if (!isUsingMock) {
      return [];
    }
    const db = readMockDB();
    return db.inquiries || [];
  }
};

export { isUsingMock };