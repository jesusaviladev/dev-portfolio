import IconLink from './IconLink'
import GitForkIcon from './icons/GitForkIcon'
import StarIcon from './icons/StarIcon'
import { GITHUB_COLORS } from '../lib/utils/githubColors'
import ArrowRightIcon from './icons/ArrowRightIcon'
import { DateTime } from 'luxon'

const RepositoryCard = (props) => {
    // console.log(props)
    const updateDate = DateTime.fromISO(props.updated_at).setLocale('en-US')

    return (
        <article className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a
                href={props.html_url}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
            >
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.name}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {props.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-3 text-xs md:text-sm font-normal text-gray-700 dark:text-gray-400">
                {props.language && (
                    <p className="flex gap-2 items-center">
                        <span
                            className="inline-block rounded-full size-3"
                            style={{
                                backgroundColor:
                                    GITHUB_COLORS[props.language]?.color,
                            }}
                        ></span>
                        {props.language}
                    </p>
                )}
                <IconLink
                    icon={<StarIcon className="size-6" />}
                    href={`${props.html_url}/stargazers`}
                >
                    {props.stargazers_count}
                </IconLink>
                <IconLink
                    icon={<GitForkIcon className="size-6" />}
                    href={`${props.html_url}/forks`}
                >
                    {props.forks_count}
                </IconLink>
                <p>Updated {updateDate.toRelative()}</p>
            </div>
            <a
                href={props.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                See repository
                <ArrowRightIcon />
            </a>
        </article>
    )
}

export default RepositoryCard
