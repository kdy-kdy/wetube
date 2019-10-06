import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePw
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);

userRouter.get(routes.changePw, onlyPrivate, changePw);
userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

export default userRouter;
