import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

const swaggerDefinition = {
  openapi: '3.1.0',
  info: {
    description: 'Weather Manager API documentation',
    title: 'Weather API',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
    },
    {
      url: 'http://localhost:4000/api/v1',
    },
  ],
  tags: [
    {
      name: 'location',
      description: 'Operations about locations',
    },
    {
      name: 'weather',
      description: 'Operations about weather',
    },
  ],
  components: {
    schemas: {
      Location: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
            example: 'New York',
          },
          country: {
            type: 'string',
            example: 'United States',
          },
          countryCode: {
            type: 'string',
            example: 'US',
          },
          lat: {
            type: 'number',
            example: 40.7128,
          },
          lon: {
            type: 'number',
            example: -74.006,
          },
          state: {
            type: 'string',
            example: 'New York',
          },
          zip: {
            type: 'string',
            example: '10001',
          },
        },
      },
      CurrentWeather: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
            example: 'New York',
          },
          countryCode: {
            type: 'string',
            example: 'US',
          },
          description: {
            type: 'string',
            example: 'overcast clouds',
          },
          humidity: {
            type: 'number',
            example: 77,
          },
          pressure: {
            type: 'number',
            example: 1018,
          },
          temperature: {
            type: 'number',
            example: 18.5,
          },
          tempMax: {
            type: 'number',
            example: 18.5,
          },
          tempMin: {
            type: 'number',
            example: 18.5,
          },
          windSpeed: {
            type: 'number',
            example: 2.52,
          },
        },
      },
      ForecastWeather: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
            example: 'New York',
          },
          countryCode: {
            type: 'string',
            example: 'US',
          },
          weathers: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Weather',
            },
          },
        },
      },
      Weather: {
        type: 'object',
        properties: {
          date: {
            type: 'string',
            example: '2021-01-01 12:00:00',
          },
          description: {
            type: 'string',
            example: 'overcast clouds',
          },
          humidity: {
            type: 'number',
            example: 77,
          },
          pressure: {
            type: 'number',
            example: 1018,
          },
          temperature: {
            type: 'number',
            example: 18.4,
          },
          tempMax: {
            type: 'number',
            example: 18.5,
          },
          tempMin: {
            type: 'number',
            example: 18.5,
          },
          windSpeed: {
            type: 'number',
            example: 2.52,
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: [`${path.join(__dirname).split('/').slice(0, -1).join('/')}/**/**/*.route.{ts,js}`],
};

const OpenApiConfig = swaggerJsdoc(options);

export default OpenApiConfig;
