module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'Poppins': ['Poppins', 'sans-serif'],
            },
            backgroundImage: {
                'hero': "url('./../images/banner.png')"
            },
            container: {
                padding: "2rem"
            },
        },
    },
    plugins: [],
}