import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthContext } from "../../../context/AuthContext"
import { useLogoutUser } from "../../../hooks"
import PageLoader from "../PageLoader"
import Button from "../Button"
import { LogOut } from "lucide-react"

const RootLayout = () => {
    const { isAuthenticated, isAuthLoading } = useContext(AuthContext);
    // console.log({ isAuthenticated })
    // const isAuthenticated = false

    const { mutate, /* isPending, isError, error  */ } = useLogoutUser()

    const handleLogout = () => {
        mutate()
    }

    if (isAuthLoading) {
        return <PageLoader />;
    }


    if (!isAuthenticated) {
        return <Navigate to="/register" replace />
    }

    return (
        <div className="min-h-screen bg-zinc-50"><nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95">
            <div className="mx-auto flex h-16 items-center justify-between px-6">
                <h2 className="text-lg font-semibold text-zinc-900">
                    User Directory
                </h2>
                <Button onClick={handleLogout}>
                    Logout
                    <LogOut className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </nav>
            <main className="px-6">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout