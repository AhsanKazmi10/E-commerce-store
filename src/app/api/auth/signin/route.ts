import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // 🚀 DATABASE TERMINAL REPORTING HERE
      // Jab bhi koi sign in karega, uska exact raw data aapko yahan console par milega
      console.log("=== HB ENTERPRISES GOOGLE AUTH DATA SHIELD ===");
      console.log("User Node Name:", user.name);
      console.log("User Node Email:", user.email);
      console.log("User Avatar Link:", user.image);
      
      // Yahan aap mongoose.connect() karke data database me insert kar sakte hain
      
      return true; // Processing allowed status verified
    },
    async session({ session, token }) {
      return session;
    }
  },
  pages: {
    signIn: '/signin', // Aapka custom structural design page point connect ho gaya
  }
});

export { handler as GET, handler as POST };