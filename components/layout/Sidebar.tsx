import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
	// Define an array of objects representing each item in the sidebar. Each object
	// has a label, href, and icon property.
	const items = [
		{
			label: "Home",
			href: "/",
			icon: BsHouseFill,
		},
		{
			label: "Notifications",
			href: "/notifications",
			icon: BsBellFill,
		},
		{
			label: "Home",
			href: "/users/123",
			icon: FaUser,
		},
	];

	return (
		// Set the element to take up one column (i.e., a width of 1/4) of the grid on all screen sizes.
		// Set the height of the element to be 100% of its parent container (i.e., the second column of the grid).
		// Set the right padding of the element to be `4` on small screens (i.e., screens with a `md` breakpoint or smaller)
		// and `6` on larger screens.
		<div className="col-span-1 h-full pr-4 md:pr-6">
			<div className="flex flex-col items-end">
				{/* 
          Set the width of the element to be `230px` on large screens and leave it unset on small screens.
          The `space-y-2` class sets the vertical space between child elements to be `0.5rem` (i.e., `2`) 
          on all screen sizes.
        */}
				<div className="space-y-2 lg:w-[230px]">
					<SidebarLogo />
					{items.map((item) => (
						<SidebarItem
							key={item.href}
							href={item.href}
							label={item.label}
							icon={item.icon}
							handleClick={function (): void {
								throw new Error("Function not implemented.");
							}}
						/>
					))}
					<SidebarItem
						label={"Logout"}
						icon={BiLogOut}
						handleClick={function (): void {
							throw new Error("Function not implemented.");
						}}
					/>
					<SidebarTweetButton />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
