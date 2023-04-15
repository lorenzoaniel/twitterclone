// Importing the prisma client instance, NextApiRequest, and getSession from next-auth/react
import prisma from "@/libs/prismadb";
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

// Defining the serverAuth function
const serverAuth = async (req: NextApiRequest) => {
	// Getting the session for the user
	const session = await getSession({ req });

	// Checking if the session exists and if the user is signed in
	if (!session?.user?.email) {
		throw new Error("Not signed in");
	}

	// Fetching the user with the given email
	const currentUser = await prisma.user.findUnique({
		where: {
			email: session.user.email,
		},
	});

	// Checking if the user exists
	if (!currentUser) {
		throw new Error("Not signed in");
	}

	// Returning the user object on successful authentication
	return { currentUser };
};

// Exporting the serverAuth function
export default serverAuth;
