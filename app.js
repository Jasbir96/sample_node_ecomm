const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
console.log(process.env.MESSAGE)
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

console.log("Bye")
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});