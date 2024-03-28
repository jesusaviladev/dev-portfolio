const RepositoryCard = (props) => {
    console.log(props)
    return (
        <article className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.full_name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {props.description}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {props.language}
            </p>
            <a
                href={props.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                See repository
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </a>
        </article>
    )
}

export default RepositoryCard
