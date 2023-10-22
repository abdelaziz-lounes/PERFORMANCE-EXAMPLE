const express= require('express');
const cluster= require('cluster');
const app= express();

function delay(duration){
    const startTime= Date.now();
    while (Date.now - startTime < duration) {
        // event loop is blocked...
    }
}



app.get('/',(req, res)=>{
    res.send("performance example");
})

app.get("/timer",(req,res)=>{
    delay(9000);
    res.send("ding ding ding ...")
})

if(cluster.isMaster){
    console.log('master process is started');
    cluster.fork();
    cluster.fork();
}else{
    console.log('worker has been started ..');
    app.listen(3000);
}