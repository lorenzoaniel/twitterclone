import { useRouter } from "next/router";
import React from "react";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
	const router = useRouter();

	return (
		<div onClick={() => router.push("/")}>
			{/* 
        When the screen size is small (i.e., the `lg` breakpoint or smaller):
        - Set the element to be a rounded circle with a height and width of `14`.
        - Set the element to be `4` units away from its children on all sides.
        - Center the child elements horizontally and vertically within the element.
        - Set the background color to `sky-500` and the opacity to `80%` on hover.
        - Apply a transition effect on hover.
        - Set the cursor to be a pointer on hover.
        When the screen size is large (i.e., larger than the `lg` breakpoint):
        - Hide the element.
      */}
			<div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
				<FaFeather size={24} color="white" />
			</div>
			{/* 
        When the screen size is small (i.e., the `lg` breakpoint or smaller):
        - Hide the element.
        When the screen size is large (i.e., larger than the `lg` breakpoint):
        - Set the element to be `12` units high.
        - Center the child elements horizontally and vertically within the element.
        - Set the background color to `sky-500` and the opacity to `80%` on hover.
        - Apply a transition effect on hover.
        - Set the cursor to be a pointer on hover.
      */}
			<div className="mt-6 hidden lg:flex bg-sky-500 h-12 items-center justify-center rounded-3xl hover:bg-opacity-80 transition cursor-pointer">
				<p className="text-white font-bold text-xl">Tweet</p>
			</div>
		</div>
	);
};

export default SidebarTweetButton;
