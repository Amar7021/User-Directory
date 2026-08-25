import { useRouteError } from "react-router";
import Button from "./Button";
import { RefreshCw } from "lucide-react";

const RouteError = () => {
    const error = useRouteError();

    const errorMessage =
        error?.message ||
        error?.statusText ||
        "Something unexpected happened.";

    return (
        <main className="flex min-h-screen items-center justify-center px-6">
            <div className="text-center">
                <p className="text-sm font-medium text-zinc-500">
                    {error?.status || "Error"}
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
                    Something went wrong
                </h1>
                <p className="mt-2 text-sm text-zinc-500">
                    {errorMessage}
                </p>
                <Button onClick={() => window.location.reload()} className="my-2">
                    <RefreshCw className="h-4 w-4 mr-2" /> Reload
                </Button>
            </div>
        </main>
    );
};

export default RouteError