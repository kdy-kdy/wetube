import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  changePw,
  postEditProfile
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);
userRouter.get(routes.changePw, onlyPrivate, changePw);

export default userRouter;
