const express = require('express');
const app = express();



app.get('/', (req, res) => {
    
    res.send('<h1>Home Route</h1>');
});




app.listen(8080, () => {
    console.log('server runnig at http://localhost:8080');
})