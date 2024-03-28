export const fetchProjectsRepositories = async () => {
    try {
        const response = await fetch(
            'https://api.github.com/users/jesusaviladev/repos'
        )

        if (!response.ok) throw new Error('Failed fetch')

        const data = await response.json()

        return {
            data,
        }
    } catch (error) {
        return {
            data: [],
            error,
        }
    }
}
