const mix = require('laravel-mix')

mix.sass('src/style.scss', 'assets')
    .options({
        processCssUrls: false,
    })
