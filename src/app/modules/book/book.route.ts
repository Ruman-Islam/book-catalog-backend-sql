import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';
const router = express.Router();

router.get('/', BookController.getAllBooks);

// router.get('/:id', CategoryController.getSingleCategory);

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.create),
  BookController.createBook
);

// router.patch(
//   '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
//   validateRequest(CategoryValidation.updateCategoryValidation),
//   CategoryController.updateCategory
// );

// router.delete(
//   '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
//   CategoryController.deleteCategory
// );

export const BookRoutes = router;
