import { AiTwotoneWallet } from "react-icons/ai"
import { UserCard } from "../../../global/Card/UsersCard/UsersCard"

export const UsersTotalAmountOnBet = () => {
    return (
        <UserCard
            info="Total User Bet"
            icon={<AiTwotoneWallet />}
            percent={`17%`}
        />
    )
}