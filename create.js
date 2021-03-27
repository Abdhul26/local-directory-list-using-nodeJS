const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');
var content = "";

fs.readdir("/", (err,files) => { 
    if (err) {
        console.log(err);
    }
    else {
        files.forEach(file => {
            content +=" " +file;
            console.log(file);
        })
    }
});

app.get("/", (req, res) => {
    res.send(content);
    console.log(res.files);
});
 
app.listen(3000,()=>{ console.log("directory list here");});

