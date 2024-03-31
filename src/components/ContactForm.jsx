import { useState } from 'react'
import Input from './forms/Input'
import TextArea from './forms/TextArea'
import Joi from 'joi'
import { formatErrors } from '../lib/utils/formatErrors'
import { submitForm } from '../lib/services/submitForm'

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState(null)

    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required(),
        message: Joi.string().max(2000).required(),
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsSubmitting(true)

        const form = e.target

        const data = Object.fromEntries(new FormData(form))

        const { error } = schema.validate(data, { abortEarly: false })

        if (error) {
            const errors = formatErrors(error)
            setIsSubmitting(false)
            return setErrors(errors)
        }

        const { response, error: submitError } = await submitForm(data)

        if (!submitError) {
            console.log(response)
            form.reset()
        } else {
            setErrors({
                form: submitError,
            })
        }

        setIsSubmitting(false)
    }

    return (
        <form className="max-w-[700px] my-2 m-auto p-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 justify-center">
                <Input
                    label="Name"
                    name="name"
                    placeholder="Your name"
                    error={errors?.name && errors.name}
                />
                <Input
                    label="Email"
                    name="email"
                    placeholder="Your email"
                    error={errors?.email && errors.email}
                />
                <TextArea
                    label="Message"
                    name="message"
                    error={errors?.message && errors.message}
                />
                <button
                    type="submit"
                    className="px-5 py-2.5 mt-3 text-sm font-medium text-white inline-flex justify-center items-center bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    disabled={isSubmitting}
                >
                    <svg
                        className="w-3.5 h-3.5 text-white me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                    >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ContactForm
