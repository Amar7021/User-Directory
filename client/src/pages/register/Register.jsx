import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import { useCreateUser } from "../../hooks";
import Loader from "../../components/ui/Loader";
import { UserPlus } from "lucide-react";
import Header from "../../components/ui/layout/Header";

const registerSchema = yup.object({
    firstName: yup
        .string()
        .trim()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters")
        .max(20, "First name must be at most 20 characters"),
    lastName: yup
        .string()
        .trim()
        .required("Last name is required")
        .min(1, "Last name must be at least 1 character")
        .max(20, "Last name must be at most 20 characters"),
    dob: yup
        .date()
        .typeError("Please enter a valid date")
        .required("Date of birth is required")
        .max(new Date(), "Future Date of birth not allowed"),
})

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
        mode: "onChange",
        // reValidateMode: "onChange"
    })

    const { mutate, isPending } = useCreateUser()

    const onSubmit = (data) => {
        const formattedDate = data.dob.toISOString().split("T")[0]
        mutate({ ...data, dob: formattedDate })
        // console.log(data, formattedDate)
    }

    return (
        <div className="min-h-screen bg-zinc-50">
            <Header />
            <main className="flex items-center justify-center p-6 mt-10">
                <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-md">
                    <div className="mb-4">
                        <h1 className="text-2xl font-semibold text-zinc-900">
                            Create your account
                        </h1>
                        <p className="mt-1 text-sm text-zinc-500">
                            Enter your details to get started.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <Input
                            id="firstName"
                            name="firstName"
                            label="First name"
                            placeholder="Enter first name"
                            required
                            error={errors.firstName?.message}
                            {...register("firstName")}
                        />
                        <Input
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            placeholder="Enter last name"
                            required
                            error={errors.lastName?.message}
                            {...register("lastName")}
                        />
                        <Input
                            id="dob"
                            label="Date of birth"
                            type="date"
                            required
                            min="1900-01-01"
                            max={new Date().toISOString().split("T")[0]}
                            error={errors.dob?.message}
                            {...register("dob")}
                        />
                        <Button type="submit" className="w-full my-2">
                            {
                                isPending ? <Loader /> : <><UserPlus className="h-4 w-4 mr-2" /> Regsiter</>
                            }
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Register