import { DashboardRoutTo } from "./Header/DashboardRoutTo"
import { UserSigningAbout } from "./Header/UserDetail/UserSigningAbout"

export const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <DashboardRoutTo/>
            </div>
            <div className="mr-14">
                <UserSigningAbout/>
            </div>
        </div>
    )
}