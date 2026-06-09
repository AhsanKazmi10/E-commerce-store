import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// ✅ GET - Single product
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productId = parseInt(id);
    
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
      .single();
    
    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: product });
    
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// ✅ DELETE - Delete product
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    console.log("=== DELETE API CALLED ===");
    
    const { id } = await params;
    console.log("Product ID:", id);
    
    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }
    
    const productId = parseInt(id);
    
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: "Invalid product ID" },
        { status: 400 }
      );
    }
    
    console.log("🗑️ Deleting product ID:", productId);
    
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', productId);
    
    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    console.log("✅ Deleted successfully:", productId);
    
    return NextResponse.json({
      success: true,
      message: "Product deleted successfully"
    });
    
  } catch (error: any) {
    console.error("Delete API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

// ✅ PUT - Update product (agar zaroorat ho)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const productId = parseInt(id);
    
    const { data, error } = await supabase
      .from('products')
      .update({
        name: body.name,
        image: body.image,
        category: body.category,
        moq: body.moq,
        description: body.description
      })
      .eq('id', productId)
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
    });
    
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}