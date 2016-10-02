import { Router } from 'express';
import { userController } from '../controllers';

const userRouter = Router();

userRouter.get('/', userController.get);
userRouter.post('/', userController.post);

export default userRouter;
