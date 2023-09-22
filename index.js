const express = require("express") 

const app = express();

app.get('/', (req, res) => {

    return res.send(`Hello Server`);
})

app.get('/home', (req, res) => {
    return res.json({ message : "Hello from home page"});
})

app.listen(8000, () => console.log('My server started'));
