const mongoose = require('mongoose');

const asignaturaSchema =  new mongoose.Schema({
    nombre:{
        type: String,
        required:[true,"La asignatura es requerida"],
        trim:true,
        minlength:[2,"una signatura debe de tener como minimo 2 caracteres"],
        maxlength:[50, "Una asignatura debe de tener como maximo 50 caracteres"]   
     },
    creditos:{
        type: Number,
        required:[true,"Una asignatura debe de tener creditos"]
    },
    horas:{
        type: Number,
        required:[true, "Una asignatura debe de tener horas"]
    }
})
const Asignatura = mongoose.model("asignatura", asignaturaSchema);
module.exports = Asignatura