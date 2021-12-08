import mongoose from 'mongoose'

//Definir un objeto Schema 
const Schema = mongoose.Schema

//Definir la estructura de las entidades 
//a registrar

const PersonaSchema = new Schema(
    {
        Color: {
            type: String,
            required: "nombre vacio"
        },
        Precio: {
            type: String,
        },Marca: {
            type:String,
            required: "posicion vacia"
        },fecha_creacion:{
            type:Date,
            default: Date.now
        }

    }
)

export default PersonaSchema