const listDirectory = require("./listDirectory");
let funciones = {},
    archivos = [],
    respuesta = "A la espera de tus archivos";
//

funciones.home = (req, res) => {
    let archive = listDirectory.listar(__dirname + "/files");
    // console.log("el metodo retorno ", archive.length);
    res.render('home', {
        mensaje: respuesta,
        estado: "none",
        data: archive      
    });
};

funciones.upload = (req, res) => {
    if (!req.files) {
        res.status(401).json({
            status:0,
            info:"Error al cargar el archivo"
        });
    }
    let fname = req.files.filename.name;
    let file = req.files.filename;
    file.mv(__dirname + "/files/" + fname, (err) => {
        if (err) {
            respuesta = {
            status:0,
            info:`Error al cargar el archivo ${fname}`
            }
            // res.render("home", {
            //     mensaje: respuesta
            // });
            res.status(501).json(respuesta);
        }
        let messageok = {status:1,
                         info:`El archivo ${fname} se cargo correctamente`}
        console.log(messageok);
        // res.redirect("/");
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM customer', (err, customers) => {
                console.log(customers);
            });
        });
        res.status(200).json(messageok);
    });
}
module.exports = funciones; 