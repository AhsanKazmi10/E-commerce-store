import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    
    let query = supabase.from('products').select('*');
    
    if (category && category !== "all" && category !== "null") {
      // ✅ CHECK: Agar frontend 'patches' mang raha hai, toh saari sub-categories fetch karein
      if (category === "patches") {
        query = query.in('category', ['patches', 'merrowed-edge', 'iron-press', 'leather-patches']);
      } else {
        // Baqi pages ke liye standard single category filter chale (jaise 'woven-invention')
        query = query.eq('category', category);
      }
    }
    
    const { data: products, error } = await query;
    
    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { success: false, data: [], error: error.message },
        { status: 500 }
      );
    }
    
    // ✅ Always return valid JSON
    return NextResponse.json({
      success: true,
      data: products || [],
      count: products?.length || 0
    });
    
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        data: [], 
        error: error.message || "Internal server error" 
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    if (!body.name || !body.image) {
      return NextResponse.json(
        { error: "Name and image are required" },
        { status: 400 }
      );
    }
    
    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          name: body.name,
          image: body.image,
          category: body.category || "General",
          moq: parseInt(body.moq) || 1,
          description: body.description || ""
        }
      ])
      .select();
    
    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: data?.[0]
    }, { status: 201 });
    
  } catch (error: any) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create product" },
      { status: 500 }
    );
  }
}