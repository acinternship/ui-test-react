var path = require("path");

module.exports = {
	entry: {
		mainJS: "./js/main.js",
		listPostJS: "./js/ListPost.js",
		newPostJS: "./js/NewPost.js",
		categoryJS: "./js/ListCategory.js",
		listUsersJS: "./js/ListUsers.js"
	},
	output: {
	  path: path.join(__dirname, "dist"),
	  filename: "[name].entry.js"
	},
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}