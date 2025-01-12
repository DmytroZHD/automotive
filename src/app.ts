import express, { Request, Response } from 'express';

const app = express();

export const getTime = (): string => {
    return new Date().toISOString();
};

app.get('/time', (req: Request, res: Response) => {
    const currentTime = getTime();
    res.json({ utcTime: currentTime });
});

export default app;