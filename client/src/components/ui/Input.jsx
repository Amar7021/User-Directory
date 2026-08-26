import { CircleAlert } from 'lucide-react'

const Input = ({
    label,
    required = true,
    error,
    placeholder = "Enter",
    type = "text",
    id,
    disabled = false,
    className = "",
    ...props
}) => {
    return (
        <div className="w-full h-[92px]">
            {label && (
                <label
                    htmlFor={id}
                    className={`
            mb-1 ml-1.5 block text-sm font-medium text-zinc-700 text-left
            ${required ? "after:ml-1 after:text-red-500 after:content-['*']" : ""}
          `}
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                aria-invalid={!!error}
                {...props}
                className={`
          w-full rounded-3xl border
          px-3 py-2
          text-sm 
          outline-none
          transition-all duration-150
          ${error
                        ? `
                border-red-500 text-red-500 bg-red-100
                focus-visible:border-red-500
                focus-visible:ring-2
                focus-visible:ring-red-500/30
                placeholder:text-red-500
              `
                        : `
                border-zinc-300 text-zinc-900 placeholder:text-zinc-400
                focus-visible:border-zinc-900
                focus-visible:ring-2
                focus-visible:ring-zinc-900/30
              `
                    }
          disabled:cursor-not-allowed
          disabled:bg-zinc-100
          disabled:opacity-60
          ${className}
        `}
            />
            {error && (
                <p className="flex items-center gap-1 text-[12px] text-red-500 text-left ml-1.5 font-medium">
                    <CircleAlert className='h-3 w-3' />{error}
                </p>
            )}
        </div>
    )
}

export default Input