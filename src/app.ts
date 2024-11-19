import express, { Request, Response } from 'express';

const app = express();

app.get('/time', (req: Request, res: Response) => {
    const currentTime = new Date().toISOString(); // UTC формат
    res.json({ utcTime: currentTime });
});

export default app;