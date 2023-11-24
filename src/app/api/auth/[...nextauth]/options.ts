import {NextAuthOptions} from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {db} from "@/src/backend/model/db";
import {getUser, getUserByUsername, verifyPassword} from "@/src/backend/services/myapp/user";
import bcrypt from "bcrypt";

export const options: NextAuthOptions = {
  
  adapter: PrismaAdapter(db),
  
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {label: "Username", type: "text", placeholder: "jsmith"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        // check to see if the username and password are valid
        if (!credentials?.username || !credentials?.password) return null;
        
        const user = await getUserByUsername(credentials.username);
        console.log(user)
        if (!user) {
          console.log('User not found');
          return null;
        }
        
        // check if the password match
        const passwordMatch = await bcrypt.compare(credentials.password, user.password);
        
        if (!passwordMatch) {
          console.log('Password does not match');
          return null;
        }
        
        // return user if valid
        return user;
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.user = user;
      }
      console.log(token)
      return token
    },
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
      }
      console.log(session)
      return session
    },
  }
};


export default options;
