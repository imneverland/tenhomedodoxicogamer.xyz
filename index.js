import express from 'express'
import path from 'path';
const app = express();
const __dirname = path.resolve(path.dirname(''));


app.listen(6969, () => {
    console.log("Tenho medo do xicogamer")
    console.log("Sucesso: Site online na porta 6969")
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html")
});

app.use('/static', express.static(__dirname + '/static'))