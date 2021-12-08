//Endpoints del proyecto
//Endpoint: Ruta REST en un proyecto API Backend
// Ej: http://localhost:5000/personas/4
//          Un endpoint solo exponen info en formato JSON
import { addBicicletas,
         getBicicletas, 
         getBicicletasById, 
         deleteBicicletas } from "../controllers/ContactoController.js"

const rutas = (  app ) => {
        app.route('/Bicicletas')
                  .get(getBicicletas)
                  .post(addBicicletas)
        app.route('/Bicicletas/:Bicicletasid')   
                  .get(getBicicletasById) 
        app.route('/Bicicletas/delete/:Bicicletasid')
                  .get(deleteBicicletas)      
}


export default rutas

