// Importing the PrismaClient from the Prisma package.
import { PrismaClient } from "@prisma/client";

// THIS LIB IS TO PREVENT HOTRELOAD FROM CREATING NUMEROUS INSTANCES OF PRISMA CLIENT

// Declare a global variable named prisma, and assign it a type of PrismaClient or undefined.
declare global {
	var prisma: PrismaClient | undefined;
}

// If a global variable named prisma exists, assign its value to client. Otherwise, create a new instance of PrismaClient and assign it to client.
const client = globalThis.prisma || new PrismaClient();

// If the environment variable NODE_ENV is not "production", assign the value of client to the global variable prisma.
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

// Export the client as the default export of this module.
export default client;
