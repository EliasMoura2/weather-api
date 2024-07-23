import request from 'supertest';
import { testServer } from '../../test-server';

describe('Location Routes', () => {
  beforeAll(async () => {
    await testServer.start()
  })

  afterAll(() => {
    testServer.close()
  })

  describe.skip('GET /api/v1/location', () => {
    it('should return statusCode 200', async () => {
      await request(testServer.app).get('/api/v1/location').expect(200)
    })

    it('should return an object', async () => {
      const response = await request(testServer.app).get('/api/v1/location')

      expect(response.body.location).toBeInstanceOf(Object)
    })

    it('should return a location', async () => {
      const response = await request(testServer.app).get('/api/v1/location')

      expect(response.body).toHaveProperty('location')

      expect(response.body.location).toHaveProperty('city')
      expect(response.body.location).toHaveProperty('country')
      expect(response.body.location).toHaveProperty('countryCode')
      expect(response.body.location).toHaveProperty('lat')
      expect(response.body.location).toHaveProperty('lon')
      expect(response.body.location).toHaveProperty('region')
      expect(response.body.location).toHaveProperty('regionName')
      expect(response.body.location).toHaveProperty('zip')
    })
  })
})