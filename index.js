const express = require('express');
const app = express();
const port = 80;

app.get('/api/signin', (req, res) => {
    if(req.header('token')=='fewbox'){
        res.send({isSuccessful:true, isValid:true});
    }
    else{
        res.send({isSuccessful:true, isValid:false, errorMessage:'Forbidden You don not have permission to access.', errorCode:403});
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))