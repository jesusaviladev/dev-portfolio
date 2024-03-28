import React, { useState, useEffect } from 'react'
import { fetchProjectsRepositories } from '../lib/services/fetchProjectsRepositories'
import RepositoryCard from './RepositoryCard'

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
                setData(result.data)
            })
            .catch((error) => {
                console.log(error)
                setError(error)
            })
    }, [])

    console.log(repositories.data)

    if (repositories.loading) return <p>cargando...</p>

    return (
        <div className="grid grid-cols-3 gap-6 p-3">
            {repositories.data.map((repo) => (
                <RepositoryCard {...repo} />
            ))}
        </div>
    )
}

export default ProjectsList
