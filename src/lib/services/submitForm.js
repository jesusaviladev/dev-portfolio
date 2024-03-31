export const submitForm = async (data) => {
    const body = JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.email.trim(),
    })

    try {
        const response = await fetch('https://formspree.io/f/xqkwakrk', {
            method: 'POST',
            body,
            headers: {
                Accept: 'application/json',
            },
        })

        if (!response.ok) throw new Error('Failed fetch')

        const data = await response.json()

        return {
            response: data,
        }
    } catch (error) {
        return {
            response: null,
            error,
        }
    }
}
