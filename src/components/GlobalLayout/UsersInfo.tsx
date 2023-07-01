import { ActiveUsers } from "./UsersInfo/ActiveUsers/ActiveUsers"
import { AllUsers } from "./UsersInfo/AllUsers/AllUsers"
import { UsersTotalAmountOnBet } from "./UsersInfo/UsersTotalAmountOnBet/UsersTotalAmountOnBet"

export const UsersInfo = () => {
    return (
        <div className="flex mt-8 sm:flex-col lg:flex-row sm:items-center sm:justify-center lg:justify-start lg:items-start gap-3">
            <AllUsers />
            <ActiveUsers />
            <UsersTotalAmountOnBet/>
        </div>
    )
}