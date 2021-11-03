const Paciente = require('../models/Paciente');

//Cuando se crea un nuevo cliente
exports.nuevoCliente = async(req, res, next) => {
    //Crear objeto de paciente con req.body
    const paciente = new Paciente(req.body);
    console.log(req.body);

    try {
        await paciente.save();
        res.json({ mensaje: 'El cliente se agrego correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
}
//Obtiene todos los pacientes
exports.obtenerPacientes = async(req, res, next) => {
    
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}
//Obtiene un paciente especifico por su ID
exports.obtenerPaciente = async(req, res, next) => {

    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}
//Actualiza un registro por su ID
exports.actualizarPaciente = async(req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}
//Elimina un registro por su ID
exports.eliminarPaciente = async(req, res, next) => {
    try {
        await Paciente.findByIdAndDelete({_id: req.params.id});
        res.json('El paciente fue eliminado exitosamente');
    } catch (error) {
        console.log(error);
        next();
    }
}