import request from 'supertest';
import { testServer } from '../../test-server';

describe('Weather Routes', () => {
  beforeAll(async () => {
    await testServer.start()
  })

  afterAll(() => {
    testServer.close()
  })

  describe('GET /api/v1/weather/current', () => {
    it('should return statusCode 200', async () => {
      await request(testServer.app).get('/api/v1/weathers/current').expect(200)
    })

    it('should return an object', async () => {
      const response = await request(testServer.app).get('/api/v1/weathers/current')

      expect(response.body.weather).toBeInstanceOf(Object)
    })

    it('should return a weather', async () => {
      const response = await request(testServer.app).get('/api/v1/weathers/current') 

      expect(response.body).toHaveProperty('weather')

      expect(response.body.weather).toHaveProperty('description')
      expect(response.body.weather).toHaveProperty('icon')
      expect(response.body.weather).toHaveProperty('id')
      expect(response.body.weather).toHaveProperty('main')
    })
  })
})