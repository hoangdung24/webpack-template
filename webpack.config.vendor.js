const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        vendor: ["coreui", "react", "react-bootstrap", "react-dom", "react-redux", "react-router-dom", "react-thunk", "redux"]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        library: 'vendor_lib'
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'vendor_lib',
            path: path.join(__dirname, 'dist', '[name]-manifest.json')
        })
    ]
};
