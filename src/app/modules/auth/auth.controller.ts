import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ILoginUserResponse } from './auth.interface';
import { AuthService } from './auth.services';

const signUp: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AuthService.signUp(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  }
);

const login: RequestHandler = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);

  sendResponse<ILoginUserResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  });
});

export const AuthController = {
  signUp,
  login,
};
