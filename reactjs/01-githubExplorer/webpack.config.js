const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',

    devtool: isDevelopment? 'eval-source-map' : 'source-map',

    //arquivo de entrada
    entry: path.resolve(__dirname, 'src', 'index.tsx'), 

    //arquivo de saida (minificado)
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //extensoes
    resolve: { 
        extensions: ['.js', '.jsx', 'ts', 'tsx']
    },

    devServer: {
        static: path.resolve(__dirname, 'public'),

        hot: true
    },

    //Adicionar script ao index.html
    plugins: [ 
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),

        isDevelopment && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),

    // arquivo js, ignorar node_modules e usar o babel
    module: { 
        rules: [
            {
                //regras pra arquivos JS
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },

            {
                //regras para arquivos CSS
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }


}