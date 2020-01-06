// const webpack = require('webpack');
// const path = require('path');

// // test 
// module.exports = {

//     // devtool:'inline-source-map', // to see the error in actual file and not the bundle ... for debugging 
//     devtool:'eval-source-map',
//     entry: {
//         'index': './src/index.js'
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.js'
//         publicPath:'/assets' // this means for static content like images .. the path /assets/image.png will eb created .. and node should server files from static folder
//         // filename: '[name].[hash].js

//     },

//     module: {
//         rules: [{
//                 //  webpack regex // hash chunk hash
//                 // rules kun kun files ma use garne regex regExp
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: 'babel-loader'
//             },
//             {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"]
//             }

//         ]
//     },
//       resolve: { extensions: ["*", ".js", ".jsx"] },
//       // resolve is used to tell webpack the files to search for... * meaing all fiels... .files with .js .. .coffee , .webpack.js


//     devServer: {
//         // contentBase: path.join(__dirname, "public/"),
//         port: 3000,
//     //     publicPath: "http://localhost:3000/dist/",
//     // },


// }

// // webpack
// // react
// // virtaul dom guff
// // state props 
// // componenet life cycle, render, component did mount - > update, unmount 
// // css 
// // container, componenet , presentational component guff
// // event handling , state change
// // control, uncontroll 
// // form input bind
// // get post - axios
// // localstorage token
// // ref - > reference , react state ko alternative , things not to be dne by react but normal
// // redux state management 
// // redux saga, thunk

// // https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
// // https://stackoverflow.com/questions/40294870/module-exports-vs-export-default-in-node-js-and-es6

//  // npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2.
//  //  react@16.5.2 and react-dom@16.5.2. 

//  // html web plugin