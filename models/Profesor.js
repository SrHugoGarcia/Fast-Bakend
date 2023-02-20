const mongoose = require("mongoose")

const profesorSchema = new mongoose.Schema({
	rfc:{
        type: String,
        required:[true,"Un profesor necesita un rfc"],
        trim: true,
        minlength:[3,"El rfc debe de tener como minimo 3 caracteres"],
        maxlength: [300,"El rfc debe de tener como maximo 300 caracteres"],
	},
	nombre:{
        type: String,
        required:[true,"Un profesor necesita un nombre"],
        trim: true,
        minlength:[3,"El nombre debe de tener como minimo 3 caracteres"],
        maxlength: [300,"El nombre debe de tener como maximo 300 caracteres"],
	},
apellidoPaterno:{
        type: String,
        required:[true,"Un profesor necesita un apellido paterno"],
        trim: true,
        minlength:[3,"El apellido paterno debe de tener como minimo 3 caracteres"],
        maxlength: [300,"El apellido paterno debe de tener como maximo 300 caracteres"],
	},
apellidoMaterno:{
        type: String,
        required:[true,"Un profesor necesita un apellido materno"],
        trim: true,
        minlength:[3,"El apellido materno debe de tener como minimo 3 caracteres"],
        maxlength: [300,"El apellido materno debe de tener como maximo 300 caracteres"],
	},
fechaNacimiento:{
        type: Date,
        required:[true,"Un profesor necesita una fecha de nacimiento"],
        trim: true,
	},
direccion:{
        type: String,
        required:[true,"Un profesor necesita una direccion"],
        trim: true,
        minlength:[3,"La direccion debe de tener como minimo 3 caracteres"],
        maxlength: [300,"La direccion debe de tener como maximo 300 caracteres"],
	},
celular:{
    type: Number,
    required:[true,"Un profesor necesita un celular"],
    trim: true,
    min:[10,"El celular debe de tener como minimo 10 caracteres"],
	},
profesion:{
    type: String,
    required:[true,"Un profesor necesita una profesion"],
    trim: true,
    minlength:[3,"La profesion debe de tener como minimo 3 caracteres"],
    maxlength: [300,"La profesion debe de tener como maximo 300 caracteres"],
	},
numeroEmpleado:{
    type: Number,
    required:[true,"Un profesor necesita un numero empleado"],
    trim: true,
	},
})
const Profesor = mongoose.model("Profesor",profesorSchema);
module.exports = Profesor

