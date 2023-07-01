import { FiUsers } from "react-icons/fi"
import { UserCard } from "../../../Global/Card/UsersCard/UsersCard"

export const AllUsers = () => {
    return (
        <UserCard
            info="All Users"
            icon={<FiUsers />}
            percent={`17%`}
        />
    )
}