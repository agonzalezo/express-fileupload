const
    express = require('express'),
    app = (express()),
    morgan = require("morgan"),
    upload = require("express-fileupload"),
    os = require("os"),
    backend = require("./routes/backend.js");
    favicon = require("serve-favicon")
    // port = process.env.PORT || 80;

//Configuration
app.set("port", process.env.PORT || 80);
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

//MiddleWare
app.use(morgan("combined"));
app.use(upload());
app.use(favicon(__dirname+"/public/favicon.ico"))
app.use(express.static(__dirname+ "/public"));
app.use(backend);

app.listen(app.get("port"), () => {

    console.log(`Servidor iniciado en http://localhost:${app.get("port")}`)
})