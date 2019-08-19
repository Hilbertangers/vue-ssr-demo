module.exports = {
    apps: [{
        name: 'jjmmw-pc-ssr',
        script: './server.js',
        instances: 'max',
        watch: true,
        cwd: './',
        ignore_watch: [
            'node_modules',
            'logs'
        ],
        watch_options: {
            usePolling: true,
            useFsEvents: true
        },
        env: {
            NODE_ENV: 'production',
            PORT: '3000'
        }
    }]
}