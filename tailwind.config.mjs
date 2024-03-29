/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'hero-pattern':
                    "linear-gradient(to bottom, var(--tw-gradient-stops)), url('/hero.png')",
            },
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(14.0deg)' },
                    '20%': { transform: 'rotate(-8.0deg)' },
                    '30%': { transform: 'rotate(14.0deg)' },
                    '40%': { transform: 'rotate(-4.0deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
            },
            animation: {
                wave: 'wave 2.5s infinite',
            },
        },
    },
    plugins: [],
}
