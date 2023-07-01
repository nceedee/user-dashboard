import { DashboardRoutTo } from "./Header/DashboardRoutTo"
import { UserSigningAbout } from "./Header/UserDetail/UserSigningAbout"

export const Header = () => {
    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div>
                <DashboardRoutTo/>
            </div>
            <div className="mr-5">
                <UserSigningAbout/>
            </div>
        </div>
    )
}