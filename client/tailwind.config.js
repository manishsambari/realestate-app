/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#84cc16', // lime-500 - bright lime for buttons
                secondary: '#1e293b', // slate-800 - dark text
                accent: '#f0fdf4', // green-50 - very light mint background
                mint: {
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    500: '#22c55e',
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
            }
        },
    },
    plugins: [],
}
