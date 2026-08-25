const Loader = ({
    size = "md",
    className = "",
    loaderText
}) => {
    const sizes = {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2",
        lg: "h-8 w-8 border-[3px]",
    };

    return (
        <div className="flex items-center gap-2">
            <span
                role="status"
                aria-label="Loading"
                className={`
        inline-block
        animate-spin
        rounded-full
        border-zinc-200
        border-t-zinc-900
        ${sizes[size]}
        ${className}
      `}
            />
            <span className="text-sm font-medium">{loaderText && loaderText}</span>
        </div>
    );
};

export default Loader;