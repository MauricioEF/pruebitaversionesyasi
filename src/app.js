import express from 'express';

const app = express();

app.listen(8080,()=>console.log("Listening"))


app.get('/',(req,res)=>{
    res.send("Mis primeros cambios");
})