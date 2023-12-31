import { ReactNode } from "react";

type Props = {
    className?: string;
    children: ReactNode;
};

export const Card = ({ children, className }: Props) => {
    return (
        <div className={`shadow-custom bg-white p-5 rounded-md ${className}`}>
            {children}
        </div>
    );
};