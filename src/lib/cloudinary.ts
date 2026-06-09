import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(file: File | string, folder: string = 'products') {
  try {
    // Agar file base64 string hai
    if (typeof file === 'string' && file.startsWith('data:image')) {
      const result = await cloudinary.uploader.upload(file, {
        folder: folder,
        transformation: [{ width: 800, height: 800, crop: 'limit' }]
      });
      return {
        url: result.secure_url,
        publicId: result.public_id
      };
    }
    
    // Agar file buffer hai (from form data)
    if (file instanceof File) {
      const buffer = await file.arrayBuffer();
      const base64 = Buffer.from(buffer).toString('base64');
      const dataURI = `data:${file.type};base64,${base64}`;
      
      const result = await cloudinary.uploader.upload(dataURI, {
        folder: folder,
        transformation: [{ width: 800, height: 800, crop: 'limit' }]
      });
      
      return {
        url: result.secure_url,
        publicId: result.public_id
      };
    }
    
    throw new Error('Invalid file format');
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
}

export async function deleteFromCloudinary(publicId: string) {
  try {
    await cloudinary.uploader.destroy(publicId);
    console.log('Image deleted from Cloudinary:', publicId);
  } catch (error) {
    console.error('Cloudinary delete error:', error);
  }
}

export default cloudinary;