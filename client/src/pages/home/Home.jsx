import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { calculateAge, capitalizeName } from "../../utils.js";

const Home = () => {
    const { isUser } = useContext(AuthContext);

    return (
        <section className="flex items-center justify-center pb-10 pt-20">
            <div className="w-full max-w-md rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                    <img
                        src={isUser.profileImg}
                        alt={`${isUser.firstName} ${isUser.lastName}`}
                        className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-semibold capitalize text-zinc-900">
                            {capitalizeName(`${isUser.firstName} ${isUser.lastName}`)}
                        </h2>
                        <p className="mt-1 text-sm text-zinc-500">
                            {calculateAge(isUser.dob)} years old
                        </p>
                    </div>
                </div>  <div className="mt-6 space-y-4 border-t border-zinc-100 pt-6">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                            First name
                        </p>
                        <p className="mt-1 text-sm capitalize text-zinc-700">
                            {capitalizeName(isUser.firstName)}
                        </p>
                    </div> <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                            Last name
                        </p>
                        <p className="mt-1 text-sm capitalize text-zinc-700">
                            {capitalizeName(isUser.lastName)}
                        </p>
                    </div><div>
                        <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                            Date of birth
                        </p>
                        <p className="mt-1 text-sm text-zinc-700">
                            {new Date(isUser.dob).toLocaleDateString()}
                        </p>
                    </div><div>
                        <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                            Age
                        </p>
                        <p className="mt-1 text-sm text-zinc-700">
                            {calculateAge(isUser.dob)} years
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home