const express1 = require('express');
const app1 = express1();
app1.set('port', 3000);

const data = [
    {
        name:'goerge',
        age: 50
    },
    {
        name:'jane',
        age: 32
    },
    {
        name:'john',
        age: 42
    },
];

app1.get('/getData',(req:any,res:any)=>{
    res.type('application/json');
    res.json(data);
})

app1.listen(app1.get('port'), ()=>console.log('[server] http://localhost:' + app1.get('port')));