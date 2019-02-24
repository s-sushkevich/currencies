const path = require('path');

const conf = {
    entry: './src/index.js', // по умолчанию
    mode: 'development', // по умолчанию
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js",
    },
    module: {
        rules: [{
            test: /\.handlebars$/,
            loader: "handlebars-loader"
        }, {
            test: /\.js$/,
            loader: "babel-loader",
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ],
        }]
    },
    devServer: {
        port: 9000,
        // overlay: true,
    },
    devtool: "source-map",
};

module.exports = conf;