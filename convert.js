var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./test/index.html', 'utf8');
var options = {
    width: '1218px',
    height: 'auto',
    base: 'http://192.168.1.64:3000',
    timeout: 10000
};

pdf.create(html, options).toFile('./test/example-A43.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
