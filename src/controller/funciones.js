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
        let sid = req.body.sid;
        let sname = req.body.sname;
        let datos = [sname, sid];
        console.log ("datos enviados ",datos)
        req.getConnection((err, conn) => {
            if (err) {
                res.json(err)
            }
            conn.query('update services set service_name = ? where service_id = ?', [sname, sid], (err, result)=>{
                console.log("Se actualizo el registro ", result.message)
            });
            conn.query('SELECT * FROM services', (err, servicios) => {
                console.log(servicios);
            });
        });
        res.status(200).json(messageok);
    });
}
module.exports = funciones; 