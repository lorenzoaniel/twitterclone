// Importing the necessary dependencies
import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

// Importing the prisma client instance
import prisma from "@/libs/prismadb";

// Defining the options for NextAuth
export const authOptions: AuthOptions = {
	// Using PrismaAdapter for handling authentication
	adapter: PrismaAdapter(prisma),
	// Providing the CredentialsProvider for authentication
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			// Authorize function to handle user authentication
			async authorize(credentials) {
				// Checking for valid credentials
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Invalid credentials");
				}

				// Fetching the user with the given email
				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				// Checking if the user exists and has a hashed password
				if (!user || !user?.hashedPassword) {
					throw new Error("Invalid credentials");
				}

				// Comparing the provided password with the hashed password
				const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

				// Checking if the password is correct
				if (!isCorrectPassword) {
					throw new Error("Invalid credentials");
				}

				// Returning the user on successful authentication
				return user;
			},
		}),
	],
	// Enabling debug mode in development environment
	debug: process.env.NODE_ENV === "development",
	// Configuring the session strategy
	session: {
		strategy: "jwt",
	},
	// Configuring JWT for token generation and verification
	jwt: {
		secret: process.env.NEXTAUTH_JWT_SECRET,
	},
	// Configuring the secret for cookie signing
	secret: process.env.NEXTAUTH_SECRET,
};

// Exporting the NextAuth instance with the defined options
export default NextAuth(authOptions);
