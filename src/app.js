import express from 'express';

const app = express();

app.listen(8080,()=>console.log("Listening"))


app.get('/',(req,res)=>{
    res.send("Mis primeros cambios");
})
app.get('/another',(req,res)=>{
    res.send("Otro endpoint")
})
app.get('/miendpointJR',(req,res)=>{
    res.send("Mi cambio feliz");
})