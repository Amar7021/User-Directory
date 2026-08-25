import { createContext, useEffect, useState } from "react"
import api from "../api/httpClient"

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [isUser, setIsUser] = useState(null)
    const [isAuthLoading, setIsAuthLoading] = useState(true)

    const storeUser = (data) => {
        setIsUser(data)
    }

    const logoutUser = () => {
        setIsUser(null)
    }

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await api.get("/auth/user/get-user")
                if (response.data.status) {
                    setIsUser(response.data.user)
                }
            } catch (error) {
                console.log("Error: ", error)
                setIsUser(null)
            } finally {
                setIsAuthLoading(false)
            }
        }

        getCurrentUser()
    }, [])

    const contextValue = {
        isUser,
        storeUser,
        logoutUser,
        isAuthenticated: isUser !== null,
        isAuthLoading
    }

    return <AuthContext value={contextValue}>
        {children}
    </AuthContext>
}

export default AuthProvider