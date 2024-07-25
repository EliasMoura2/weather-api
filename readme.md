## Weather API

### Pasos para ejecutar el proyecto

1. **Copiar el link para clonar el repositorio**

```
git clone https://github.com/EliasMoura2/weather-api.git
```

2. **Abrir una terminal, pegar el link copiado y presionar enter**

3. **Ingresar al directorio clonado**

```
  cd weather-api
```

4. **Abrir visual studio code**

```
  code .
```

5. **crear un archivo .env y guardar las siguiente variables de entorno**

- _En caso de no tener las variables de entorno se lanzará un error al iniciar el servidor_

```
  PORT=3000
  NODE_ENV=dev
  OPEN_WEATHER_APPID=852700f42b4616253453603d6a3ddbed
```

> Nota: el APPID de open weather no estará disponible por mucho tiempo.

5. **ejecutar el comando `nvm use` para cambiar la version de node**
   > Nota: Deberiamos tener instalado el paquete [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

- **Una vez instalado nvm o en caso de no tener instalada la version requerida ejecutar el comando `nvm install lts/hydrogen`**

6. **Instalar el paquete [pnpm](https://pnpm.io/installation)**

```
  npm install -g pnpm
```

7. **ejecutar el comando `pnpm i` para instalar las dependencias**
8. **ejecutar el comando `pnpm dev` para iniciar el servidor en modo desarrollo**
9. **Probar los endpoints**
   > Podemos probar los endpoints ingresando a la url: [http://localhost:3000/docs](http://localhost:3000/docs)

## Endpoints

- /api/v1/location
- /api/v1/weathers/current
- /api/v1/weathers/forecast

### Otros scripts

> 1. `pnpm build` para compilar el proyecto
> 2. `pnpm start` para compilar e iniciar el servidor en modo producción
> 3. `pnpm test` para correr los tests
> 4. `pnpm test:watch` para correr los tests en modo watch
> 5. `pnpm test:coverage` para generar el coverage de los tests

---

## Documentación endpoints

1. `GET /api/v1/location`: Endpoint para obtener lo datos de ubicacion.<br><br>
   cURL:

   ```
     curl --location 'localhost:3000/api/v1/location'
   ```

   response:

   ```
     {
       "location": {
         "city": "Montreal",
         "country": "Canada",
         "countryCode": "CA",
         "lat": 45.6085,
         "lon": -73.5493,
         "state": "Quebec",
         "zip": "H1K"
       }
     }
   ```

2. `GET /api/v1/weathers/current?city={city}`: Endpoint para obtener el clima actual de una ciudad.<br><br>
   El dato city no es requerido por lo que peude ser enviado o no.<br>
   En caso de omitir enviar el dato city, se obtendra el clima de la ciudad que se obtiene de ip-api.<br><br>
   cURL:

   ```
     curl --location 'localhost:3000/api/v1/weathers/current?city=Montreal'
   ```

   response:

   ```
     {
       "weather": {
         "city": "Montreal",
         "countryCode": "CA",
         "description": "overcast clouds",
         "humidity": 69,
         "pressure": 1015,
         "temperature": 25.86,
         "tempMax": 26.9,
         "tempMin": 25.01,
         "windSpeed": 5.66
       }
    }
   ```

3. `GET /api/v1/weathers/forecast?city={city}`: Endpoint para obtener el pronoostico del clima de una ciudad.<br><br>
   El dato city no es requerido por lo que peude ser enviado o no.<br>
   En caso de omitir enviar el dato city, se obtendra el clima de la ciudad que se obtiene de ip-api.<br><br>
   cURL:
   ```
     curl --location 'localhost:3000/api/v1/weathers/forecast?city=Montreal'
   ```
   response:
   ```
     {
       "forecastWeather": {
         "city": "Montreal",
         "countryCode": "CA",
         "weathers": [
           {
             "date": "2024-07-24 21:00:00",
             "description": "light rain",
             "humidity": 72,
             "pressure": 1014,
             "temperature": 25.63,
             "tempMax": 25.63,
             "tempMin": 23.6,
             "windSpeed": 3.41
           },
           {
             "date": "2024-07-25 00:00:00",
             "description": "moderate rain",
             "humidity": 78,
             "pressure": 1014,
             "temperature": 24.27,
             "tempMax": 24.27,
             "tempMin": 21.56,
             "windSpeed": 2.93
           },
           ...
         ]
       }
     }
   ```
