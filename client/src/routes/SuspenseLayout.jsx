import { Suspense } from "react"
import PageLoader from "../components/ui/PageLoader"

const SuspenseLayout = ({ children }) => {
    return (
        <Suspense fallback={<PageLoader />}>
            {children}
        </Suspense>
    )
}

export default SuspenseLayout