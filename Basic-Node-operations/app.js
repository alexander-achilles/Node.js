const http= require("http");
//const fs=require("fs");
const routes =require("./routes");

const server=http.createServer(routes);
   // console.log(req);
   /* const url= req.url;
   {const method = req.method;
   if(url === "/")
   {
    res.setHeader("Content-Type","text/html");
    res.write("<html>");
    res.write("<head><title>first node page</title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
    res.write("</html>");
    return res.end();
   }
   if(url==="/message" && method==="POST"){
       const body=[];
       req.on("data",(chunk)=>{ //parsing data from server
           //console.log(chunk); //logging the stream
           body.push(chunk);
       });

       req.on("end", ()=>{  //storing the parsed data from server 
           const parsedBody= Buffer.concat(body).toString();
           const message = parsedBody.split('=')[1];
           fs.writeFileSync("message.txt",message); //execution happend at the end of the option
       })
       
       res.statusCode=302; //status code for redirect
       res.setHeader("location","/");
       return res.end(); //end the function
   }
   res.setHeader("Content-Type","text/html");
   res.write("<html>");
   res.write("<head><title>first node page</title></head>");
   res.write("<body><h1>hello!!! from raw nodejs</h1></body>");
   res.write("</html>");
});*/
server.listen(3000,function(){
    console.log("server is up");
});