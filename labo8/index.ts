import { Profiler, url } from "node:inspector";

const express3 = require('express')
const app2 = express3();
const ejs = require('ejs');

app2.set('view engine', 'ejs');
app2.set('port',3000);

app2.get('/',(req:any,res:any)=>{
    res.render('index')
})

app2.get('/whoami',(req:any,res:any)=>{
    res.render('whoami',{
        name: 'komut salih',
        age: 22,
        profilepic: 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&h=661&q=70&fm=webp'
    })
});

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