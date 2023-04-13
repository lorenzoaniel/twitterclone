import React from "react";
import { variants } from "./variants";

interface Props {
	label: string;
	variant: string; //className injection
	fullWidth?: boolean;
	onClick: () => void;
	disabled?: boolean;
	large?: boolean;
	outline?: boolean;
}

const Button: React.FC<Props> = ({
	label,
	variant,
	fullWidth,
	onClick,
	disabled,
	large,
	outline,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`
			${variants[variant]}
			${fullWidth ? "w-full" : "w-fit"}
			${large ? "text-xl" : "text-md"}
			${large ? "px-5" : "px-4"}
			${large ? "py-3" : "py-2"}
			${outline ? "bg-transparent" : ""}
			${outline ? "border-white" : ""}
			${outline ? "text-white" : ""}
		`}
		>
			{label}
		</button>
	);
};

export default Button;
