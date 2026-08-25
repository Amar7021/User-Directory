import { Link } from "react-router";

const NotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-6">
            <div className="text-center">
                <p className="text-sm font-medium text-zinc-500">404</p>

                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
                    Page not found
                </h1>

                <p className="mt-3 text-sm text-zinc-500">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <Link
                    to="/"
                    className=" 
            mt-6 inline-flex items-center justify-center
            rounded-md bg-zinc-900 px-4 py-2
            text-sm font-medium text-white
            transition-all duration-150
            hover:bg-zinc-800
            active:scale-95
          "
                >
                    Go to home
                </Link>
            </div>
        </main>
    );
};

export default NotFound;