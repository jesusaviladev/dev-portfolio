const Input = ({ label, error, ...props }) => {
    const labelClassNames = error
        ? `text-red-700 dark:text-red-500`
        : `text-gray-900 dark:text-white`

    const inputClassNames = error
        ? `bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
        : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

    return (
        <div>
            {label && (
                <label
                    htmlFor={label}
                    className={`block mb-2 text-sm font-medium ${labelClassNames}`}
                >
                    {label}
                </label>
            )}
            <input
                id={label}
                type="text"
                className={`border text-sm rounded-lg dark:bg-gray-700 block w-full p-2.5 ${inputClassNames}`}
                {...props}
            />
            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {error}
                </p>
            )}
        </div>
    )
}

export default Input
