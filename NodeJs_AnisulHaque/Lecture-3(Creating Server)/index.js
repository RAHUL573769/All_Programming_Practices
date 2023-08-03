const http = require('http');

const server=http.createServer((req,res)=>{

    res.writeHead(202,{'Content-Type':'text/html'});
    
    res.write("Hello")
    res.end();
});


server.listen(3000,()=>{
    console.log("Server is runing");
});

