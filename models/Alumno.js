const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [true, "Un alumno debe de tener un nombre"],
        trim: true,
        minlength:[2,"El nombre debe de tener como minimo 2 caracteres"],
        maxlength:[50,"El nombre debe de tener como maximo 50 caracteres"]
    },
    apellidoPaterno:{
        type: String,
        required: [true, "Un alumno debe de tener un apellido paterno"],
        trim: true,
        minlength:[2,"El apellido paterno debe de tener como minimo 2 caracteres"],
        maxlength:[50,"El apellido paterno debe de tener como maximo 50 caracteres"]
    },
    apellidoMaterno:{
        type: String,
        required: [true, "Un alumno debe de tener un apellido paterno"],
        trim: true,
        minlength:[2,"El apellido materno debe de tener como minimo 2 caracteres"],
        maxlength:[50,"El apellido materno debe de tener como maximo 50 caracteres"]    
    },
    fechaNacimiento:{
        type: Date,
        required: [true,"Un alumno debe de tener una fecha de nacimiento"]
    },
    sexo:{
        type: String,
        required:[true, "Un alumno debe de tener un sexo"],
        minlength: [2,"un alumno debe de tener como minimo 2 caracteres"],
        maxlength:[50,"Un alumno debe de tener como maximo 50 caracteres"],
        trim: true,
    },
    celular:{
        type: String,
        required:[true,"Un alumno debe de tener un celular"],
        minlength:[10,"Un alumno debe de tener como minimo 10 caracteres"],
        maxlength:[10,"Un alumno debe de tener como maximo 10 caracteres"],
        trim: true,
    },
    direccion:{
        type: String,
        required: [true, "Un alumno debe de tener una direcciono"],
        trim: true,
        minlength:[2,"La direccion debe de tener como minimo 2 caracteres"],
        maxlength:[50,"La direccion debe de tener como maximo 50 caracteres"]    
    },
})
const Alumno = mongoose.model("alumno",alumnoSchema);

module.exports = Alumno