import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;
    
    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }
    
    // Check file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "File must be an image" }, { status: 400 });
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Image must be less than 5MB" }, { status: 400 });
    }
    
    // Upload to Cloudinary
    const result = await uploadToCloudinary(file);
    
    return NextResponse.json({
      success: true,
      url: result.url,
      publicId: result.publicId
    });
    
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}