import { ReactNode } from "react";

type ButtonType = React.ComponentProps<"button"> & { children: ReactNode };

export const Button = ({ className, children, ...props }: ButtonType) => {
	return (
		<button
			className={`bg-accent p-2 rounded border-none outline-none ${className}`}>
			{children}{" "}
		</button>
	);
};
