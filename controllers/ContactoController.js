import mongoose from 'mongoose'
import PersonaSchema from '../models/ContactoModel.js'

//DAO de Contacto
const Bicicletas = mongoose.model('Bicicletas' , PersonaSchema)

//accion de controlador: insertar nueva Persona
export const addBicicletas = ( request , response ) => {
    //crear nueva Persona:
    let nuevoBicicletas = new Bicicletas( request.body )
    //grabar la nueva persona
    nuevoBicicletas.save( (error , Bicicletas) => {
        if(error){
            response.send(error)
        }else{
            response.json(Bicicletas)
        }
    })
}

//accion para seleccionar todas las personas
export const getBicicletas = (request , response) => {
    Bicicletas.find( {} ,   (error , Bicicletas) => {
        if(error){
            response.send(error)
        }else{
            response.json(Bicicletas)
        }
    }   )
}

//accion de detalle de persona
export const getBicicletasById = (request , response ) => {
    Bicicletas.findById( request.params.Bicicletas.id ,   (error , Bicicletas) => {
        if(error){
            response.send(error)
        }else{
            response.json(Bicicletas)
        }
    }   )
}

//accion borrar: 
export const deleteBicicletas = (request , response ) => {
    Bicicletas.deleteOne( { _id: request.params.Bicicletasid } , (error , Bicicletas ) =>{
           if(error){
               response.send(error)
           }
           else{
               response.json({ mensaje: "Bicicleta borrado"})
           } 
    })
}



