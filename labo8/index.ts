const express3 = require('express')
const app2 = express3();
const ejs = require('ejs');

app2.set('port',3000);
app2.set('view engine','ejs');

app2.get('/',(req:any,res:any)=>{
    res.render('index');
})

app2.get('/whoami',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello World, whoami')
})

app2.get('/whoamijson',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello World, whoamijson')
})

app2.get('/pikachujson',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello World, pikachu')
})

app2.get('/pikachuhtml',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello World, pikachuhtml')
})

app2.listen(app2.get('port'),
    ()=>console.log('[server] http://localhost:' + app2.get('port')));