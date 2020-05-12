const express = require("express");

const product = express();

product.get("/", (req, res, next)=>{
    res.status(200).send({
        mensagem: "OK"
    });
});

module.exports = product;