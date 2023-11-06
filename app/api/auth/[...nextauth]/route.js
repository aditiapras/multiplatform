import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import axios from "axios";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import ShortUniqueId from "short-unique-id";
import moment from "moment-timezone";

const uid = new ShortUniqueId();
const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const { email, password } = credentials;
          const res = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/login`,
            {
              email,
              password,
            }
          );
          const user = res.data;
          const matchPassword = await bcrypt.compare(password, user.password);

          if (!user) {
            return null;
          }

          if (!matchPassword) {
            return null;
          }
          return {
            email: user.email,
            name: user.username,
            id: user.userId,
          };
        } catch (error) {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const checkUser = await prisma.user.findMany({
        where: {
          email: session.user.email,
        },
      });
      const id = checkUser[0].userId;
      session.user.id = id;

      return session;
    },
    async signIn({ profile, user }) {
      if (profile) {
        const checkUser = await prisma.user.findMany({
          where: {
            email: profile.email,
          },
        });

        const userExist = checkUser.length;

        if (userExist > 0) {
          console.log(user);
        } else {
          const uidWithTimestamp = uid.stamp(32);
          const data = await prisma.user.create({
            data: {
              userId: uidWithTimestamp,
              username: profile.name,
              email: profile.email,
              avatar: profile.picture,
              accountVerified: false,
              connectWithGoogle: true,
              subscription: {
                create: {
                  plans: "Basic",
                },
              },
              WeddingDetail: {
                create: {
                  created_at: moment().toISOString(),
                },
              },
            },
          });
          console.log(data);
        }
      } else {
        console.log(user);
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
    updateAge: 60 * 60 * 2,
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    verifyRequest: `/login`,
    error: "/login", //
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
