let HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),

    pathSource  = __dirname + '/source',
    pathDev   = __dirname + '/dev',
    pathBuild   = __dirname + '/build';

/**
 * Plugins
 */
let plugins = {
    copyHTML: new HtmlWebpackPlugin({
        template: pathSource + '/index.html',
        filename: 'index.html'
    }),
    uglify: new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    production: new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    occurrenceOptimize: new webpack.optimize.OccurenceOrderPlugin()
};

/**
 *  Common build process
 */
let commonConfig = {
    entry: [
        pathSource + '/index.js'
    ],
    module:{
        loaders:[
            {
                test: /\.js$/,
                include:  pathSource,
                loader: 'babel'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: pathDev
    },

    plugins: [
        plugins.copyHTML
    ],

    vue:{
        postcss: [require('autoprefixer')()]
    }
};

/**
 * Production config
 */
let productionConfig = {
    output: {
        filename: 'app.js',
        path: pathBuild
    },

    plugins: [
        plugins.copyHTML,
        plugins.uglify,
        plugins.occurrenceOptimize,
        plugins.production
    ]
};

let webpackConfig = Object.assign(
    commonConfig,
    process.env.NODE_ENV == 'production' ? productionConfig : {}
);

module.exports = webpackConfig;