var WebpackStatePlugin = require('./webpackStatePlugin')

module.exports = {   
    entry: './main.js',   
    output: {     
        filename: 'bundle.js'   
    },
    plugins: [
        new WebpackStatePlugin({
            options: 'nada'
        })
    ]

}; 