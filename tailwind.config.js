module.exports = {
    purge: ['./src/index.html', './src/js/*.js', './src/components/*.vue'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins:[
        require('@tailwindcss/typography'),
    ],
}
