const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function() {
    
    //Agrega nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );
    //Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );
    //Obtienen un paciente en especifico
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );
    //Actualizar un registro con un Id especifico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );
    //Elimina un paciente por su id
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );

    return router;
}