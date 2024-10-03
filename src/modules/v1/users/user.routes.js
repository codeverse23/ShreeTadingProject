import express from 'express';
import { createUserProfileSchema, userProfileSchema,loginUserSchema, changePasswordReqSchema, getBalSchema } from './user.schema.js';
import { ValidationSource, validator } from '../../../middlewares/validator.js';
import {verifyToken} from "../../../helpers/token.js"
import { changePasswordReq, createUserProfile, getBal, getUserProfile, loginUser } from './user.controller.js';

const usersRouter = express.Router();

usersRouter.post("/createProfile", verifyToken,validator(createUserProfileSchema),createUserProfile);
usersRouter.get("/profileDetails/:id",verifyToken,validator(userProfileSchema,ValidationSource.PARAM), getUserProfile);
usersRouter.post("/loginUser",verifyToken,validator(loginUserSchema),loginUser);
usersRouter.post("/changePasswordReq",verifyToken,validator(changePasswordReqSchema),changePasswordReq)
usersRouter.get("/getBal",verifyToken,validator(getBalSchema,ValidationSource.PARAM),getBal)

export { usersRouter };