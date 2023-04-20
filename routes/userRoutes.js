const userControllers = require('../controllers/userControllers');
const UserController = require('../controllers/userControllers');

module.exports = (app) => {
    //peticiones de consulta
    app.get('/api/users/getAll', UserController.getAll);

    //peticiones de insercion
    app.post('/api/users/getAll', userControllers.register)
};

//consultar middleware para proteger las rutas en nodejs