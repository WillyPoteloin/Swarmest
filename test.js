var path = require("path");

console.log(__dirname);
console.log(path.resolve(__dirname));
var root_path = path.resolve(__dirname);
console.log(path.resolve(root_path, 'src/app.js'));