import React from "react";
import Sidebar from "./Sidebar";
import FollowBar from "./FollowBar";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		// Set the background color to black and the height to 100vh
		<div className="h-screen bg-black">
			{/* 
        Set the maximum width of the element to a responsive value based on the screen size 
        and center it horizontally on the page. The height of the element is set to 100% of 
        its parent container (i.e., the `h-screen` div).
        On screens that meet or exceed the `xl` breakpoint, set the horizontal padding 
        to `30px` and limit the maximum width of the element to `1200px`.
      */}
			<div className="container h-full mx-auto xl:px-30 max-w-6xl">
				{/* 
          Create a 4-column grid with the first column containing the `Sidebar` component 
          and the second column containing the children of the `Layout` component.
          On all screen sizes, the `Sidebar` component will take up one column (i.e., a width 
          of 1/4) and the children will take up three columns (i.e., a width of 3/4).
          On large screens (i.e., screens with a `lg` breakpoint or wider), the children 
          will instead take up two columns (i.e., a width of 2/4) and display a vertical border 
          with a color specified by the `border-neutral-800` Tailwind class.
        */}
				<div className="grid grid-cols-4 h-full">
					<Sidebar />
					<div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
						{children}
					</div>
					<FollowBar />
				</div>
			</div>
		</div>
	);
};

export default Layout;
