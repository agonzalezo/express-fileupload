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
            respuesta = `Error al cargar el archivo ${fname}`;
            res.render("home", {
                mensaje: respuesta
            });
        }

        let respuesta2 = `El archivo ${fname} se cargo correctamente`;
        res.redirect("/");
    });
}
module.exports = funciones; 