const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
require("babel-polyfill");

module.exports = {
    entry: [
        'babel-polyfill','./app/src/index.js'
    ],
    mode: 'development',
    devServer: {
    contentBase: './dist',
    },
    output:{
        filename: 'bundle.js', 
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, 
            {
                test: /\.html$/,
                use: {
                loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]',
					}
				}]
			},
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: __dirname + '/app/src/index.html',
            filename: 'index.html',
            inject: true
        }), 
    ],
}