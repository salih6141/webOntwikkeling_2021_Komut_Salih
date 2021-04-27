const express = require('express');
const app = express();
app.set('port',3000);

app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello World')
})

app.get('/goodbye',(req:any,res:any)=>{
    res.type('text/html');
    res.send('goodbye world')
})

app.use((req:any,res:any)=>{
    res.type('text/html');
    res.status(404);
    res.send('404 - not found');
})
//de app.use moet onderaan de app.get staan anders zal geen enkele path werken maar het moet wel boven de app.listen staan

app.listen(app.get('port'),
    ()=>console.log( '[server] http://localhost:' + app.get('port')));