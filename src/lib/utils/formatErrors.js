export const formatErrors = (error) =>
    error.details.reduce((acc, currentValue) => {
        const {
            message,
            path: [key],
        } = currentValue

        return {
            ...acc,
            [key]: message,
        }
    }, {})
