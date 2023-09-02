import express from 'express';
import { AuthController } from './auth.controller';
const router = express.Router();

router.post(
  '/sign-up',
  // validateRequest(AcademicDepartmentValidation.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AuthController.signUp
);

router.post(
  '/login',
  // validateRequest(AcademicDepartmentValidation.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AuthController.login
);

export const AuthRoutes = router;
