import request from 'supertest';
import app, { getTime } from '../app';

jest.mock('../app', () => {
    const originalModule = jest.requireActual('../app');
    return {
        ...originalModule,
        getTime: jest.fn(),
    };
});

describe('GET /time', () => {
    it('should return mocked UTC time', async () => {
        const mockedTime = '2025-01-01T12:00:00.000Z';
        (getTime as jest.Mock).mockReturnValue(mockedTime);

        const response = await request(app).get('/time');

        expect(response.status).toBe(200);

        expect(response.body).toHaveProperty('utcTime', mockedTime);
    });

    it('should handle multiple requests', async () => {
        const mockedTime = '2025-01-01T12:00:00.000Z';
        (getTime as jest.Mock).mockReturnValue(mockedTime);

        const response1 = await request(app).get('/time');
        expect(response1.body.utcTime).toBe(mockedTime);

        const response2 = await request(app).get('/time');
        expect(response2.body.utcTime).toBe(mockedTime);
    });
});