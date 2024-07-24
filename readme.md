## Weaather API

### Pasos para ejecutar el proyecto
1. **clonar el repositorio**
```
git clone https://github.com/EliasMoura2/weather-api.git
```
1.1 **Ingresar al directorio clonado**
```
  cd weather-api
```
2. **crear un archivo .env y guardar las siguiente variables de entorno**
  *En caso de no tener las variables de entorno lanzara un error al iniciar el servidor*
  ```
    PORT=3000
    NODE_ENV=dev
    OPEN_WEATHER_APPID=852700f42b4616253453603d6a3ddbed
  ```

3. **ejecutar el comando `nvm use` para cambiar la version de node**
  > Nota: Deberiamos tener instalado el paquete [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
4. **En caso de no tener instalada la version ejeutar el comando `nvm install lts/hydrogen`**
5. **Instalar el paquete [pnpm](https://pnpm.io/installation)**
```
  npm install -g pnpm
```
5. **ejecutar el comando `pnpm i` para instalar las dependencias**
6. **ejecutar el comando `pnpm dev` para iniciar el servidor en modo desarrollo**
7. **Probar los endpoints**
  > Podemos probar los endpoints ingresando a la url: [http://localhost:3000/docs](http://localhost:3000/docs)

## Endpoints
  - /api/v1/location
  - /api/weathers/current
  - /api/weathers/forecast

### Otros scripts
> 1. `pnpm build` para compilar el proyecto
> 2. `pnpm start` para compilar e iniciar el servidor en modo producción
> 3. `pnpm test` para correr los tests
> 4. `pnpm test:watch` para correr los tests en modo watch
> 4. `pnpm test:coverage` para generar el coverage de los tests