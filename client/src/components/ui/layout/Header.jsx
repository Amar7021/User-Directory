import { LogOut } from "lucide-react"
import { useLogoutUser } from "../../../hooks"
import Button from "../Button"

const Header = ({ showLogout }) => {
    const { mutate, /* isPending, isError, error  */ } = useLogoutUser()

    const handleLogout = () => {
        mutate()
    }

    return (
        <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95">
            <div className="mx-auto flex h-16 items-center justify-between px-6">
                <h2 className="text-lg font-semibold text-zinc-900 italic">
                    User Directory
                </h2>
                {
                    showLogout && <Button onClick={handleLogout}>
                        Logout
                        <LogOut className="ml-2 h-4 w-4" />
                    </Button>
                }
            </div>
        </nav>
    )
}

export default Header