import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await request.json();
    
    console.log(`📝 Updating inquiry ${id} to status: ${status}`);
    
    const { error } = await supabase
      .from('inquiries')
      .update({ status })
      .eq('id', parseInt(id));
    
    if (error) {
      console.error("Update error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
    
    console.log("✅ Status updated successfully");
    
    return NextResponse.json({
      success: true,
      message: "Status updated successfully"
    });
    
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const { data: inquiry, error } = await supabase
      .from('inquiries')
      .select('*')
      .eq('id', parseInt(id))
      .single();
    
    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: inquiry
    });
    
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}