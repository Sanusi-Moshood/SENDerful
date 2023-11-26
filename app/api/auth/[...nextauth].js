import NextAuth from "next-auth" 
import { connectToDB } from "@/utils/db"

import User from "@/models/user";

export const authOptions = {


  // Configure one or more authentication providers
  providers: [],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async signIn(user, account, profile) {
        // connect to db 
        const { db } = await connectToDatabase();
  
        // Check if the user exists in your database based on their email or other unique identifier
        const existingUser = await db.collection('users').findOne({ email: user.email });
  
        if (!existingUser) {
            // User doesn't exist, create a new user in your database
            await User.create({
              email: user.email,
              password: user.password, 
            });
          }
    
  // Compare the provided password with the hashed password in the database
  const isPasswordValid = await existingUser.comparePassword(user.password);

  if (!isPasswordValid) {
    // Password is not valid
    return false;
  }

  // User exists and password is valid, continue with sign-in
  return true;
      },
      async redirect(url, baseUrl) {
        // Redirect users to the dashboard after sign-in
        return '/dashboard';
      },
 
      async session({ session }) {
        const sessionUser = await User.findOne({
          email: session.user.email,
        });
      
        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
        }
      
        return session;
      },
  }
}

export default NextAuth(authOptions)