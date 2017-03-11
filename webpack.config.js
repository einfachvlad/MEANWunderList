const webpack = require('webpack');
const path = require('path');

const config = {
    entry: [
        'webpack/hot/only-dev-server', 'bootstrap-loader', './src'
    ],
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: [
            'node_modules', 'src'
        ],
        extensions: ['', '.js', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.(html|png)$/,
                loader: 'raw'
            }, {
                test: /\.(scss|css)$/,
                loaders: ['style', 'css', 'autoprefixer?browsers=last 3 versions', 'sass?outputStyle=expanded']
            }, {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url?limit=10000'
            }, {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({jQuery: "jquery"})
    ],
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:3000'
        }
    },
    devtool: "inline-source-map"
};

module.exports = config;
