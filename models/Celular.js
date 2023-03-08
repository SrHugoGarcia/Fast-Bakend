
const mongoose = require('mongoose');

const celularSchema = new mongoose.Schema({
    marca:{
        type: String,
        required: [true,"Un celular debe de tener una marca"],
        minlength: [2,"La marca del celular tiene como minimo 2 caracteres"],
        maxlength:[300,"La marca del celular tiene como maximo 300 caracteres"],
        trim: true
    },
    precio:{
        type: Number,
        required: [true, "Un celular debe de tener un precio"],
        min: [1,"El precio del celular debe de tener como minimo  1 caracter"],
        max: [1000000,"El precio del celular debe de tener como maximo 1000000"]
    },
    fechaLanzamiento:{
        type: Date,
        required:[true,"Un celular debe de tener una fecha de lanzamiento"],
    },
    ram:{
        type: String,
        required: [true,"Un celular debe de tener una ram"],
        minlength: [2,"La ram del celular debe de tener como minimo 2 caracteres"],
        maxlength:[300,"La ram del celular debe de tener como maximo 300 caracteres"],
        trim: true
    },
    almacenamiento:{
        type: Number,
        required: [true,"Un celular debe de tener almacenamiento"],
        min: [1,"Un celular debe de tener como minimo 1 GB de almacenamiento"],
        max:[2000,"Un celular debe de tener como maximo 2000 GB de almacenamiento"],
    },
    cantidadCamaras:{
        type: Number,
        required: [true,"Un celular debe de tener al menos una camara"],
        min: [1,"Un celular debe de tener como minimo una camara"],
        max:[10,"Un celular debe de tener como maximo 10 camaras"],
    }
});

const Celular = mongoose.model("Celulares",celularSchema);
module.exports = Celular;