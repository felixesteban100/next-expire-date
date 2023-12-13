import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { z } from "zod";
import { authConfig } from "./auth.config";
import { User } from "./lib/types";
import { collectionUsers } from "./lib/mongodb/connect";
import { WithId } from "mongodb";

async function getUser(email: string): Promise<WithId<User> | null> {
  try {
    const user = await collectionUsers.findOne({email: email});
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
            //   const passwordsMatch = await bcrypt.compare(password, user.password);
          /* if (passwordsMatch) */ return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
});
