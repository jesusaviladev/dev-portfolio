import { useState, useEffect } from 'react'
import { fetchProjectsRepositories } from '../lib/services/fetchProjectsRepositories'
import RepositoryCard from './RepositoryCard'
import Skeleton from './Skeleton'

const ProjectsList = () => {
    const [repositories, setRepositories] = useState({
        data: [],
        loading: true,
        error: null,
    })

    const setData = (data) =>
        setRepositories({
            data,
            loading: false,
            error: null,
        })

    // const setLoading = () =>
    //     setRepositories({
    //         ...repositories,
    //         loading: false,
    //     })

    const setError = (error) =>
        setRepositories({
            data: [],
            loading: false,
            error,
        })

    useEffect(() => {
        fetchProjectsRepositories()
            .then((result) => {
                if (result.error) throw new Error(result.error)

                setData(result.data)
            })
            .catch((error) => setError(error))
    }, [])

    console.log(repositories)

    if (repositories.loading) return <Skeleton />

    if (repositories.error)
        return (
            <p className="text-xl text-center">
                There was an error while loading the content!
            </p>
        )

    return (
        <div className="grid grid-cols-2 gap-6 px-40 py-8">
            {repositories.data.map((repo) => (
                <RepositoryCard {...repo} key={repo.id} />
            ))}
        </div>
    )
}

export default ProjectsList
