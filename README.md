# Proyecto XYZ

Este proyecto utiliza **Node.js**, **Sequelize** y una base de datos SQL.  
A continuación se detallan los pasos de instalación y configuración.

---

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Josemiranda989/gameStore
   cd gameStore
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Crear archivo `.env`**
   El proyecto incluye un archivo `.env-example`.  
   Para generar tu `.env`:
   ```bash
   npm run copy-env
   ```

4. **Configurar base de datos**
   Edita el archivo `.env` con los datos de tu conexión a la base de datos.

5. **Crear la base de datos**
   ```bash
   npx sequelize db:create
   ```

6. **Sincronizar modelos (solo la primera vez)**
   - Abre `app.js`.
   - Descomenta la línea **29**:
     ```js
     // require('./database/models').sequelize.sync({ force: true })
     ```

7. **Levantar el servidor**
   ```bash
   npm run dev
   ```
   Una vez que se cree la estructura de tablas, corta la ejecución.

8. **Volver a comentar la línea 29** en `app.js`.

9. **Cargar datos iniciales (seeders)**
   ```bash
   npm run seed-db
   ```

10. **Levantar el servidor en modo desarrollo**
    ```bash
    npm run dev
    ```

---

## 📦 Scripts disponibles

- `npm run init` → Crea el archivo `.env` a partir de `.env-example`.  
- `npm run dev` → Levanta el servidor en modo desarrollo.  
- `npm run seed-db` → Ejecuta los seeders para poblar la base de datos.  

---

## ✅ Listo
Tu entorno debería estar funcionando correctamente. 🎉
