// Importing the necessary dependencies
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

// Importing the prisma client instance
import prisma from "@/libs/prismadb";

// Defining the handler function
export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	// Checking if the request method is POST
	if (req.method !== "POST") {
		return res.status(405).end(); // returning HTTP status code 405 Method Not Allowed
	}

	try {
		// Extracting the email, username, name, and password from the request body
		const { email, username, name, password } = req.body;

		// Hashing the password using bcrypt
		const hashedPassword = await bcrypt.hash(password, 12);

		// Creating the user in the database using the prisma client instance
		const user = await prisma.user.create({
			data: {
				email,
				username,
				name,
				hashedPassword,
			},
		});

		// Returning the user object in the response body
		return res.status(200).json(user);
	} catch (error) {
		console.log(error); // Logging the error
		return res.status(400).end(); // returning HTTP status code 400 Bad Request
	}
};
