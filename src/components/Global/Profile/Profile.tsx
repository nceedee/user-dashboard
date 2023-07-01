import { ReactNode } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import userProfile from '../../../assets/image/avatar.jpg'

type ProfileType = React.ComponentProps<"div"> & { icon?: ReactNode };

export const Profile = ({ className, ...props }: ProfileType) => {

    return (
        <div className="flex space-x-2">
            <img src={userProfile} className={`w-[40px] h-[40px] rounded-full object-contain ${className} ${props}`} alt='profile' />
            <div className="flex items-center space-x-1">
                <h4 className="text-black text-sm">Administration</h4>
                <MdKeyboardArrowDown className="text-gray-500" />
            </div>
        </div>
    )

};