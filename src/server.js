const
    express = require('express'),
    app = (express()),
    morgan = require("morgan"),
    upload = require("express-fileupload"),
    os = require("os"),
    backend = require("./routes/backend.js"),
    favicon = require("serve-favicon"),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');
// port = process.env.PORT || 10080;

const BdProperties = {
    "host": "compusystem.tech",
    "user": "api",
    "password": "Sena1234*",
    "port": 3306,
    "database": "conductor"
};

//Configuration
app.set("port", process.env.PORT || 10080);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//MiddleWare
// app.use(morgan("combined"));
app.use(morgan("tiny"));
app.use(upload());
app.use(favicon(__dirname + "/public/favicon.ico"))
app.use(express.static(__dirname + "/public"));
app.use(myConnection(mysql, BdProperties, 'single'))
app.use(backend);

app.listen(app.get("port"), () => {

    console.log(`Servidor iniciado en http://localhost:${app.get("port")}`)
})
