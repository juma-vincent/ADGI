const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.post('/api/update_amount',  (req, res)=>{
    
    let input_amount = '' + req.body.amount;
   
    res.send(input_amount);
});



if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build')); 
    
    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
