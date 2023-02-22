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
    },
    alumnos:[
        {
        type: mongoose.Schema.ObjectId,
        ref: "alumno"
        }    
    ],
    profesor:{
        type: mongoose.Schema.ObjectId,
        ref: "Profesor"
    }    
})


asignaturaSchema.pre(/^find/,  function(next){
    this.populate({
        path:"profesor"
    })
    next()
})
const Asignatura = mongoose.model("asignatura", asignaturaSchema);
module.exports = Asignatura 