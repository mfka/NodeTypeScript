import { Request, Response } from 'express';

export class DefaultController {
    public index(req: Request, res: Response) {
        res.json({ 'success': true });
    };
}
