const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'src', 'index.ts')
    ],
    mode: "production",
    module: {
        rules: [
            { test: /\.[jt]sx?$/, use: "ts-loader", exclude: /node_modules/ },
        ],
    },
    output: {
        path:  path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    target: "node",
}