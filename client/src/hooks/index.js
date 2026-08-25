import { useMutation } from "@tanstack/react-query"
import api from "../api/httpClient"
import { toast } from "sonner"
import { useNavigate } from "react-router"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useCreateUser = () => {
    const { storeUser } = useContext(AuthContext)
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (data) => api.post("/auth/user/register", data),
        onSuccess: (result) => {
            if (result.data.status) {
                // console.log(result)
                toast.success(result.data.message)
                storeUser(result.data.user)
                navigate("/", {
                    replace: true
                })
            }
        },
        onError: (error) => {
            console.log("res", error.response?.data);

            toast.error(error.response?.data?.message ||
                "Something wrong happened."
            )
        },
    })
}

export const useLogoutUser = () => {
    const { logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    return useMutation({
        mutationFn: () => api.post("/auth/user/logout-user"),
        onSuccess: (result) => {
            if (result.data.status) {
                // console.log(result)
                toast.success(result.data.message)
                logoutUser()
                navigate("/register", {
                    replace: true
                })
            }
        },
        onError: (error) => {
            console.log("res", error.response?.data);

            toast.error(error.response?.data?.message ||
                "Something wrong happened."
            )
        },
    })
}