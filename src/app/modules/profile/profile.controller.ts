import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProfileService } from './profile.services';

const getProfile: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await ProfileService.getProfile(user?.userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Profile retrieved successfully',
    data: result,
  });
});

export const ProfileController = {
  getProfile,
};
