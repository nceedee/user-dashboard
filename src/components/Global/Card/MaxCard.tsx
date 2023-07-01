import React, { ReactNode } from "react";

type PropType = {
	className?: string;
	children: ReactNode;
};

export const MaxCard = ({ children, className }: PropType) => {
	return (
		<div className="w-full p-3">
			<div className={`max-w-7xl w-full h-full px-2 ${className}`}>{children}</div>
		</div>
	);
};
