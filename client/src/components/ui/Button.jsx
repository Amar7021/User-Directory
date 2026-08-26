const Button = ({
    children = "Button",
    onClick,
    type = "button",
    disabled = false,
    className = "",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        inline-flex items-center justify-center
        rounded-3xl px-4 py-2
        text-sm font-medium
        bg-zinc-900 text-white
        transition-all duration-150
        cursor-pointer h-9
        hover:bg-zinc-800
        active:scale-95 active:bg-zinc-700
        disabled:cursor-not-allowed disabled:opacity-50
        disabled:active:scale-100
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export default Button;