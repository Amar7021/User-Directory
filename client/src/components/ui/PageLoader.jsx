import Loader from "./Loader"

const PageLoader = () => {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-white/35 backdrop-blur-[1px] flex justify-center items-center">
            <Loader size="lg" loaderText="Directory Loading..." />
        </div>
    )
}

export default PageLoader