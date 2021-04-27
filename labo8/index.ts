const express2 = require('express');
const app2 = express();
app2.set('port',3000);

app2.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello world')
})