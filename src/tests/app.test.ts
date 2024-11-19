import request from 'supertest';
import app from '../app';

describe('GET /time', () => {
    it('should return the current UTC time', async () => {
        const response = await request(app).get('/time');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('utcTime');

        const utcTime = new Date(response.body.utcTime);
        expect(utcTime.toISOString()).toBe(response.body.utcTime);
    });
});