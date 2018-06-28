const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        sw: './src/sw/index.js'

    },

    output: {
        filename: '[name].js',
        path: __dirname + '/public'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: '/node_modules'
            }
        ]
    },

    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}