import { createBrowserRouter } from "react-router";
import NotFound from "../components/ui/NotFound";
import RootLayout from "../components/ui/layout/RootLayout";
import RouteError from "../components/ui/RouteError";
import SuspenseLayout from "./SuspenseLayout";
import Register from "../pages/register/Register";
import { Home } from "./lazyImports";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <RouteError />,
        children: [
            {

                index: true,
                element: <SuspenseLayout><Home /></SuspenseLayout>
            }
        ]
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <RouteError />
    },
    {
        path: "*",
        Component: NotFound
    }
])

export default router