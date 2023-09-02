import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
const router = express.Router();

router.post(
  '/sign-up',
  validateRequest(AuthValidation.signUp),
  AuthController.signUp
);

router.post(
  '/login',
  validateRequest(AuthValidation.login),
  AuthController.login
);

export const AuthRoutes = router;
