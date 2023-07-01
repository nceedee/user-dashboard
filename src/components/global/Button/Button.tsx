import { ReactNode } from "react";

type ButtonType = React.ComponentProps<"button"> & { icon?: ReactNode };

export const Button = ({ className, icon, ...props }: ButtonType) => {

    return (
        <div
            className={`border-b-[#ebebeb] border-b-2 ${className} p-1 py-0 flex items-center`}>
            {icon}
            <Button
                {...props}
                className="p-2 w-full rounded-lg outline-none border-none"
            />
        </div>
    );
};