module.exports = {   
    entry: './main.js',   
    output: {     
        filename: 'bundle.js'   
    },
    plugins: [
        new MyPlugin({
            options: 'nada'
        })
    ]

}; 