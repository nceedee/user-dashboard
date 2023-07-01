import { ReactNode } from "react";
import { Card } from "../DefaultCard/Card";
import { FiTrendingUp }  from 'react-icons/fi'

type UserCardType = React.ComponentProps<"div"> & { icon?: ReactNode, info?: ReactNode, percent?: ReactNode};

export const UserCard = ({ className, icon ,info,percent,...props }: UserCardType) => {

    return (
        <Card className="sm:w-[100%] lg:w-[26%]">
            <div className="flex justify-between">
                {info}
                <div className="bg-[rgba(0,153,153,.4)] rounded-full text-secondary p-2">
                    {icon}
                </div>
            </div>
            <div className="mt-3">
                <h1 className="font-bold text-xl">NaN</h1>
            </div>
            <div className="mt-3">
                <div className="text-green-500 text-[12px] flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <FiTrendingUp />
                        <div>
                            {percent}
                        </div>
                    </div>
                    <p>Since last week</p>
                </div>
            </div>
        </Card>
    );
};