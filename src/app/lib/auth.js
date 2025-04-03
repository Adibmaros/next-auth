import prisma from "./prisma";
import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) return null;

        const decodePassword = await bcrypt.compare(credentials.password, user.password);

        if (!decodePassword) return null;

        return {
          name: user.name,
          id: user.id,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (!user) return token;

      return {
        ...token,
        id: user.id,
      };
    },
    session({ session, token }) {
      return {
        ...session,
        id: token.id,
      };
    },
  },
};
