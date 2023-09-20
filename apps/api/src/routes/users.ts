import { Router } from 'express';

import UsersController from '../controllers/users';

const router = Router();

router.route('/').post(UsersController.create);

export default router;