// Importing the necessary dependencies
import { NextApiRequest, NextApiResponse } from "next";

// Importing the prisma client instance and serverAuth function
import serverAuth from "@/libs/serverAuth";

// GRABS CURRENT USER VIA EMAIL, REQUEST IS PASSED THROUGH serverAuth

// Defining the handler function
export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	// Checking if the request method is GET
	if (req.method !== "GET") {
		return res.status(405).end(); // returning HTTP status code 405 Method Not Allowed
	}

	try {
		// Authenticating the user with the serverAuth function
		const { currentUser } = await serverAuth(req);

		// Returning the user object in the response body with an HTTP status code of 200 OK
		return res.status(200).json(currentUser);
	} catch (error) {
		console.log(error); // Logging the error
		return res.status(400).end(); // returning HTTP status code 400 Bad Request
	}
};
