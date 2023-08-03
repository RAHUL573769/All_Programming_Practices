const os = require('os');

console.log(os.userInfo());
console.log(os.homedir());
console.log(os.totalmem());
console.log(__dirname);
console.log(__filename);

const path = require('path');

const extensionName=path.extname("index.html");

console.log(extensionName);

const joinName=path.join(__dirname +"/views");
console.log(joinName);
const joinName1=path.join(__dirname +"/../views");
console.log(joinName1);