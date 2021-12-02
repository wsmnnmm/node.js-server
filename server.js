var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]
var index = fs.readFileSync('index.html');

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
    if (req.url == "/index.html") {
        res.end(index.html)
        return;
    }

    //to display image
    if (req.url == "/1.jpg") {

        var img = fs.readFileSync('./1.jpg');
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        res.end(img, 'binary');

        return;

    }
})


server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

