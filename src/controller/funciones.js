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
    let fname = req.files.filename.name;
    let file = req.files.filename;
    file.mv(__dirname + "/files/" + fname, (err) => {
        //    if (err) res.status(400).send("Falla al cargar el archvio "+fname);
        if (err) {
            respuesta = {
            status:2,
            info:`Error al cargar el archivo ${fname}`
            }
            // res.render("home", {
            //     mensaje: respuesta
            // });
            res.status(501).json(respuesta);
        }
        // let respuesta2 = `El archivo ${fname} se cargo correctamente`;
        let messageok = {status:1,
                         info:`El archivo ${fname} se cargo correctamente`}
        console.log(messageok)
        // res.redirect("/");
        res.status(200).json(messageok);
    });
}
module.exports = funciones; 