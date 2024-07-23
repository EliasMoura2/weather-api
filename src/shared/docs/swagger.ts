import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

const swaggerDefinition = {
  openapi: "3.1.0",
  info: {
    description: "Weather Manager API documentation",
    title: "Weather API",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000/api/v1",
    },
    {
      url: "http://localhost:4000/api/v1",
    },
  ],
  tags: [
    {
      name: "location",
      description: "Operations about locations",
    },
    {
      name: "weather",
      description: "Operations about weather",
    },
  ],
  components: {
    schemas: {
      Location: {
        type: "object",
        properties: {
          city: { 
            type: "string",
            example: "New York"
          },
          country: {
            type: "string",
            example: "United States"
          },
          countryCode: {
            type: "string",
            example: "US"
          },
          lat: {
            type: "number",
            example: 40.7128
          },
          lon: {
            type: "number",
            example: -74.0060
          },
          state: {
            type: "string",
            example: "New York"
          },
          zip: {
            type: "string",
            example: "10001"
          },
        },
      },
      Weather: {
        type: "object",
        properties: {
          city: { type: "string" },
          lat: { type: "number" },
          lon: { type: "number" },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: [
    `${path
      .join(__dirname)
      .split("/")
      .slice(0, -2)
      .join("/")}/*/*/routes.{ts,js}`,
  ],
};

const OpenApiConfig = swaggerJsdoc(options);

export default OpenApiConfig;
