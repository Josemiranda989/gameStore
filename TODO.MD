# PENDIENTES
- Create, edit, delete
- Implementar manejo de imagenes ( MULTER )

# Paso a paso4
 1. Creamos el proyecto con 
    ```
    express --view=ejs GAMESTORE
    ```
 2. Instalamos dependencias necesarias
    ```npm i sequelize mysql2 multer```
 3. Creamos el `.sequelizerc`
```js
const path = require('path');
module.exports = {
  'config': path.resolve('database','config', 'database.js'),
  'models-path': path.resolve('database', 'models'),
  'seeders-path': path.resolve('database', 'seeders'),
  'migrations-path': path.resolve('database', 'migrations')
};
```
3.1 Ejecutamos el comando `sequelize init` para que cree la estructura en base al `.sequelizerc`

4. Configuramos en `database.js` nuestro usuario, contraseña y nombre de la db que vamos a usar

4.1 Agregue a database.js el `module.exports =` antes de la aperturas de las llaves del objeto

5. Creamos los métodos de cada una de las vistas y funcionalidades (pendiente la logica)

 6. Creamos las rutas necesarias para el crud

 7.  Creamos las vistas ejs y dimos estilos a todas.

 8. Crear database que vamos a utilizar `sequelize db:create`

 9. Sincronizar el modelo que definimos con la db, agregamos en app.js el comando para sincronizar de sequelize, luego lo comentamos
``require('./database/models').sequelize.sync({force:true})``
10. Crear y migrar datos de muestra con seeders generados con ia `sequelize db:seed:all`


