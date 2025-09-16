# PENDIENTES
- Create, edit, delete
- Implementar manejo de imagenes ( MULTER )

# Paso a paso4
 1. Creamos el proyecto con 
    ```
    express --view=ejs myapp
    ```
 2. Instalamos dependencias necesarias
    ```npm i sequelize mysql2 multer```
 3. Creamos el `.sequelizerc`
```js
const path = require('path');
module.exports = {
  'config': path.resolve('database','config', 'database.json'),
  'models-path': path.resolve('database', 'models'),
  'seeders-path': path.resolve('database', 'seeders'),
  'migrations-path': path.resolve('database', 'migrations')
};
```
 4. Configuramos en `database.json` nuestro usuario, contraseña y nombre de la db que vamos a usar

 5. Creamos los métodos de cada una de las vistas y funcionalidades (pendiente la logica)

 6. Creamos las rutas necesarias para el crud

 7. Dimos estilos a todas las vistas

 8. Crear database que vamos a utilizar `sequelize db:create`

 9. Sincronizar el modelo que definimos con la db

10. Crear y migrar datos de muestra con seeders generados con ia `sequelize db:seed:all`


