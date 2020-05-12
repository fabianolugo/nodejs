const express = require("express");

const app = express();

app.use(express.json()); 

const TaskRoutes = require("./routes/TaskRoutes");

app.use('/task', TaskRoutes);

app.listen(3000, (req, res)=> {
    console.log('escutando');
    res.status(200).send({mensagem:"ok"});
});