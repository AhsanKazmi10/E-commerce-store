import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    // Fetch all products
    const { data: products, error } = await supabase
      .from('products')
      .select('*');
    
    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    // Calculate category-wise counts
    const categoryCounts: Record<string, number> = {};
    products?.forEach((product: any) => {
      const cat = product.category;
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });
    
    // Return stats
    const stats = {
      totalProducts: products?.length || 0,
      labels: categoryCounts['woven-laises'] || 0,
      patches: categoryCounts['woven-nicks'] || 0,
      badges: categoryCounts['woven-monograms'] || 0,
      embroidery: categoryCounts['woven-invention'] || 0,
      // Additional stats
      byCategory: categoryCounts
    };
    
    return NextResponse.json(stats);
    
  } catch (error: any) {
    console.error("Stats API Error:", error);
    return NextResponse.json(
      { 
        totalProducts: 0,
        labels: 0,
        patches: 0,
        badges: 0,
        embroidery: 0,
        error: error.message 
      },
      { status: 500 }
    );
  }
}