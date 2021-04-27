const express2 = require('express');
const app2 = express2();
app2.set('port',3000);

app2.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello world')
})

app2.listen(app2.get('port'),
    ()=>console.log('[server] http://localhost:' + app2.get('port')));