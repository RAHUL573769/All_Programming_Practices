const http = require('http');
const fs = require('fs');
const server=http.createServer((req,res)=>{


    const handleReadFile=(statucode,fileLocation)=>{
        fs.readFile(fileLocation,(err,data)=>{
            res.writeHead(statucode,{'Content-Type':"text/html"});
            res.write(data);
            res.end();
          })

    }


    if(req.url==='/'){
        handleReadFile(200,'./views/index.html');
        
    }

    else if(req.url=='./views/about'){
        fs.readFile('about.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':"text/html"});
            res.write(data);
            res.end();
          })

    }
    else{

        fs.readFile('contact.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':"text/html"});
            res.write(data);
            res.end();
          })


    }



});




server.listen(3000,(req,res)=>{
    console.log("server running");
})