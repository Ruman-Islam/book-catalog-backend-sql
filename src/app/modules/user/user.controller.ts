import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.services';

const getAllUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.getAllUser();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  });
});

const getSingleUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.getSingleUser(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User retrived successfully',
    data: result,
  });
});

const updateUser: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await UserService.updateUser(id, payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserService.deleteUser(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User deleted successfully',
    data: result,
  });
});


export const UserController = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
