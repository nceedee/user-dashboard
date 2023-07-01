import { FiBell } from "react-icons/fi"
import { Profile } from "../../../Global/Profile/Profile"

export const UserSigningAbout = () => {
    return (
        <div className="flex items-center space-x-5">
            <FiBell className="text-2xl"/>
            <Profile/>
        </div>
    )
}