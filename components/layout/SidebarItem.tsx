import React from "react";
import { IconType } from "react-icons";

interface Props {
	href?: string;
	label: string;
	icon: IconType;
	handleClick: () => void;
}

const SidebarItem: React.FC<Props> = ({ label, href, icon: Icon, handleClick }) => {
	return (
		<div className="flex flex-row items-center">
			{/* 
        When the screen size is small (i.e., the `lg` breakpoint or smaller):
        - Set the element to be a rounded circle with a height and width of `14`.
        - Set the element to be `4` units away from its children on all sides.
        - Center the child elements horizontally and vertically within the element.
        - Set the background color to `slate-300` and the opacity to `10%` on hover.
        - Apply a transition effect on hover.
        - Set the cursor to be a pointer on hover.
        When the screen size is large (i.e., larger than the `lg` breakpoint):
        - Hide the element.
      */}
			<div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
				<Icon size={28} color="white" />
			</div>
			{/* 
        When the screen size is small (i.e., the `lg` breakpoint or smaller):
        - Hide the element.
        When the screen size is large (i.e., larger than the `lg` breakpoint):
        - Set the element to be a rounded circle with a height and width of `14`.
        - Set the element to be `4` units away from its children on all sides.
        - Center the child elements horizontally and vertically within the element.
        - Set the background color to `slate-300` and the opacity to `10%` on hover.
        - Apply a transition effect on hover.
        - Set the cursor to be a pointer on hover.
        - Render the label for the item.
      */}
			<div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
				<Icon size={28} color="white" />
				<p className="hidden lg:block text-white text-xl">{label}</p>
			</div>
		</div>
	);
};

export default SidebarItem;
