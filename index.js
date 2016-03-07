var jade = require('jade')
var fs = require('fs');
var affinities = JSON.parse(fs.readFileSync('sample.json', 'utf8'));

var fn = jade.compileFile('index.html.jade')
console.log(html = fn(affinities))
