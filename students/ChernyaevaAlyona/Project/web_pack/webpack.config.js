let minCss = require ('mini-css-extract-plugin')
var htmlPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:
                [
                    {
                        loader: minCss.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'production',
                        },
                    }
                    ,'css-loader'
                ]
            }
        ]
    },
    plugins:
    [
        new minCss({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
          }),
          new htmlPlugin({  
            template: './src/public/index.html'
          })
    ]
}