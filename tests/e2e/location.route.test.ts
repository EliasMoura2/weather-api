import request from 'supertest';
import app from '../../src/app';

describe('Location Routes', () => {
  describe('GET /api/v1/location', () => {
    it('should return statusCode 200', async () => {
      await request(app).get('/api/v1/location').expect(200);
    });

    it('should return an object', async () => {
      const response = await request(app).get('/api/v1/location');

      expect(response.body.location).toBeInstanceOf(Object);
    });

    it('should return a location', async () => {
      const response = await request(app).get('/api/v1/location');

      expect(response.body).toHaveProperty('location');
    });

    it('should return a location with properties', async () => {
      const response = await request(app).get('/api/v1/location');

      expect(response.body.location).toHaveProperty('city');
      expect(response.body.location).toHaveProperty('country');
      expect(response.body.location).toHaveProperty('countryCode');
      expect(response.body.location).toHaveProperty('lat');
      expect(response.body.location).toHaveProperty('lon');
      expect(response.body.location).toHaveProperty('state');
      expect(response.body.location).toHaveProperty('zip');
    });
  });
});
