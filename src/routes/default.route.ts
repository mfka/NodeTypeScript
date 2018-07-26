import { Router, Request, Response } from 'express';
import { DefaultController } from '../controllers/default.controller';

const router: Router = Router();

const defaultController = new DefaultController();
router.get('/', defaultController.index);

export const DefaultRouter: Router = router;