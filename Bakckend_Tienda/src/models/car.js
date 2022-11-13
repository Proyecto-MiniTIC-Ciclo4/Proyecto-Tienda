const mongoose = require ('mongoose')

const carSchema = mongoose.Schema({
    
    nombre: { type: String, required: true},
    imagen: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },

});

module.exports = mongoose.model('Car', carSchema);