//constantes modules
const
    fs = require("fs"),
    os = require("os");
let listDirectory = {};
let archivos = [];
let archivo;
let xarchivo;

listDirectory.listar = function (lpath) {
    let xarchivos = [];
    //validacion de path
    if (!lpath) {
        console.error("Debes enviar el path como parametro, exec 'node app.js path'");
        return ("No enviaste el Path")
    }
    //configuration
    let path = lpath;
    console.log(`\n-- Path definido "${path}"`);
    //funtion
    let xfiles = fs.readdirSync(path);
    // console.log("Se encontraron archivos ",xfiles.length)
    xfiles.forEach((val, ind, arr) => {
        let xdata = fs.statSync(`${path}/${val}`);
        xarchivo = {
            name: val,
            size: xdata.size,
            date: xdata.birthtime
        }
        // console.log("Ejecutado foreach")
        xarchivos.push(xarchivo)
    })
    // console.log("voy a devolver ",xarchivos.length)
    return xarchivos;

}
module.exports = listDirectory;