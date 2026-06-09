import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, type, message, imageUrl } = data;

    // Validation
    if (!name || !email || !phone || !type) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 1. Email Transporter Setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { 
        user: 'syedahsankazmii95@gmail.com', 
        pass: 'jokclarfajabkdiv' 
      },
      tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
      from: 'H-B Enterprises <syedahsankazmii95@gmail.com>',
      to: 'syedahsankazmii95@gmail.com',
      replyTo: email,
      subject: `H-B Enterprises: New Order from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563eb;">H-B Enterprises - New Inquiry</h2>
          <p><strong>Client:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${phone}</p>
          <p><strong>Product Type:</strong> ${type}</p>
          <p><strong>Message:</strong> ${message}</p>
          ${imageUrl && imageUrl !== "No Image" ? `<img src="${imageUrl}" style="max-width: 100%; border-radius: 8px; margin-top: 15px;" />` : ''}
          <hr style="margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">This inquiry was submitted via H-B Enterprises website.</p>
        </div>
      `,
    };

    // 2. PEHLE MAIL BHEJO
    await transporter.sendMail(mailOptions);
    console.log("✅ Mail Sent Successfully!");

    // 3. SUPABASE ME SAVE KARO (Background mein - don't await)
    // ✅ Fix: Promise ko handle karne ka sahi tarika
    const saveInquiry = async () => {
      try {
        const { error } = await supabase
          .from('inquiries')
          .insert([
            {
              name: name,
              email: email,
              phone: phone,
              product_type: type,
              message: message,
              design_image: imageUrl && imageUrl !== "No Image" ? imageUrl : null,
              status: 'pending',
              created_at: new Date().toISOString()
            }
          ]);
        
        if (error) {
          console.error("❌ Supabase Save Error:", error.message);
        } else {
          console.log("✅ Supabase: Inquiry Saved");
        }
      } catch (err) {
        console.error("❌ Supabase Save Error:", err);
      }
    };

    // Run in background (don't await)
    saveInquiry();

    // Foran response bhej dein
    return NextResponse.json({ 
      success: true, 
      message: "Your inquiry has been sent successfully! We'll contact you soon." 
    }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Global Error:", error.message);
    return NextResponse.json({ 
      error: error.message || "Failed to send message" 
    }, { status: 500 });
  }
}