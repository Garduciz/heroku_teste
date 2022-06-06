import app from './src/Controllers/app.js'
import express from "express"; 


app.use(express.json());

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`servidor escutando em http://localhost:${port}`)
});

