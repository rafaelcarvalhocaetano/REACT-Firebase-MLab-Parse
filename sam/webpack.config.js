const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output:{
        path: __dirname+'/public',
        filename: '.app.js'
    },
    devServer:{
        port:8080,
        contentBase:'./public'
    },
    resolve: {
        extensions:['','.jsx', '.js'],
        alias:{
            module: __dirname+'/node_modules'
        }
    },
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    module:{
        loader:[{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                preset:['es2015', 'react'],
                plugins:['transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file'
        }]
    }
}