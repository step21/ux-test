const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('app'));

app.listen(port, () => {
    console.log(`Factorial app listening at http://localhost:${port}`);
});

