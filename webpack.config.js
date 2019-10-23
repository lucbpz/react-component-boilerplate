var path = require('path');

module.exports = {
    entry: './src/MyComponent.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: [
                    path.resolve(__dirname, "src"),
                    path.resolve(__dirname, "__test__")
                ],
                exclude: /(node_modules|dist)/,
                use: 'babel-loader'
            }
        ]
    },
    externals: {
        'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    },
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
};