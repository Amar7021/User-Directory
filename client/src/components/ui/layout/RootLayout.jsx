import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthContext } from "../../../context/AuthContext"
import PageLoader from "../PageLoader"
import Header from "./Header"

const RootLayout = () => {
    const { isAuthenticated, isAuthLoading } = useContext(AuthContext);
    // console.log({ isAuthenticated })
    // const isAuthenticated = false


    if (isAuthLoading) {
        return <PageLoader />
    }

    if (!isAuthenticated) {
        return <Navigate to="/register" replace />
    }

    return (
        <div className="min-h-screen bg-zinc-50">
            <Header showLogout />
            <main className="px-6">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout