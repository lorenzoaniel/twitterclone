import { useRouter } from "next/router";
import React from "react";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo: React.FC = () => {
	const router = useRouter();

	return (
		// Set the element to be a rounded circle with a height and width of `14`.
		// Set the element to be `4` units away from its children on all sides.
		// Center the child elements horizontally and vertically within the element.
		// Set the background color to `blue-300` and the opacity to `10%` on hover.
		// Set the cursor to be a pointer on hover.
		// Apply a transition effect on hover.
		<div
			onClick={() => router.push("/")}
			className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition"
		>
			<BsTwitter size={28} color="white" />
		</div>
	);
};

export default SidebarLogo;
