const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',

    devtool: isDevelopment? 'eval-source-map' : 'source-map',

    //arquivo de entrada
    entry: path.resolve(__dirname, 'src', 'index.jsx'), 

    //arquivo de saida (minificado)
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //extensoes
    resolve: { 
        extensions: ['.js', '.jsx']
    },

    devServer: {
        static: path.resolve(__dirname, 'public')
    },

    //Adicionar script ao index.html
    plugins: [ 
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],

    // arquivo js, ignorar node_modules e usar o babel
    module: { 
        rules: [
            {
                //regras pra arquivos JS
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
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