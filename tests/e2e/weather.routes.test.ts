import request from 'supertest';
import server from '../../src/server';

describe('Weather Routes', () => {
  describe.skip('GET /api/v1/weather/current', () => {
    it('should return statusCode 200', async () => {
      await request(server).get('/api/v1/weathers/current').expect(200);
    });

    it('should return an error 404 if city not found', async () => {
      await request(server)
        .get('/api/v1/weathers/current?city=notfound')
        .expect('Content-Type', /json/)
        .expect(404)
        .expect({
          error: 'city not found',
        });
    });

    it('should return an object', async () => {
      const response = await request(server).get('/api/v1/weathers/current');

      expect(response.body.weather).toBeInstanceOf(Object);
    });

    it('should return the current weather', async () => {
      const response = await request(server).get('/api/v1/weathers/current');

      expect(response.body).toHaveProperty('weather');
    });

    it('should return the current weather with properties', async () => {
      const response = await request(server).get('/api/v1/weathers/current');

      expect(response.body.weather).toHaveProperty('city');
      expect(response.body.weather).toHaveProperty('countryCode');
      expect(response.body.weather).toHaveProperty('description');
      expect(response.body.weather).toHaveProperty('humidity');
      expect(response.body.weather).toHaveProperty('pressure');
      expect(response.body.weather).toHaveProperty('temperature');
      expect(response.body.weather).toHaveProperty('tempMax');
      expect(response.body.weather).toHaveProperty('tempMin');
      expect(response.body.weather).toHaveProperty('windSpeed');
    });
  });

  describe.skip('GET /api/v1/weather/forecast', () => {
    it('should return statusCode 200', async () => {
      await request(server).get('/api/v1/weathers/forecast').expect('Content-Type', /json/).expect(200);
    });

    it('should return an error 404 if city not found', async () => {
      await request(server)
        .get('/api/v1/weathers/forecast?city=notfound')
        .expect('Content-Type', /json/)
        .expect(404)
        .expect({
          error: 'city not found',
        });
    });

    it('should return an object', async () => {
      const response = await request(server).get('/api/v1/weathers/forecast');

      expect(response.body.forecastWeather).toBeInstanceOf(Object);
    });

    it('should return the forecast weather', async () => {
      const response = await request(server).get('/api/v1/weathers/forecast');

      expect(response.body).toHaveProperty('forecastWeather');
    });

    it('should return the forecast weather with properties', async () => {
      const response = await request(server).get('/api/v1/weathers/forecast');

      expect(response.body.forecastWeather).toHaveProperty('city');
      expect(response.body.forecastWeather).toHaveProperty('countryCode');
      expect(response.body.forecastWeather).toHaveProperty('weathers');
    });
  });
});
