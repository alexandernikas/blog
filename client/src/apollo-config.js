module.exports = {
    client: {
        service: {
            name: 'client',
            //url to graphql api
            url: 'http://127.0.0.1:8000/graphql',
        },
        // files processed by extension
        includes: [
            'src/**/*.vue',
            'src/**/*.js'
        ],
    },
}