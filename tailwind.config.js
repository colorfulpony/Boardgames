/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
        maxWidth: {
            '200': '200px',
            '20': '20px'
        }
    },
    plugins: [
    ],
};
