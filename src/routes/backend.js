const
    express = require("express"),
    router = express.Router(),
    funciones = require("../controller/funciones");

router.get("/", funciones.home);
router.post("/upload", funciones.upload)
module.exports = router;