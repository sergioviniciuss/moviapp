const path = require('path');
module.exports = {
    entry: { app: './src/index.js' },
    output: {
        path: path.resolve(__dirname),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {   
                        loader: "style-loader" 
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            }
        ]
    }
};