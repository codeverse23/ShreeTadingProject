import express from "express";
import { commonRouter } from "./common/common.routes.js";
import { usersRouter } from "./users/user.routes.js";
import { appSettingRouter } from "./appSetting/appsetting.router.js";

const versionOneRouter = express.Router();

versionOneRouter.use("/common", commonRouter);
versionOneRouter.use("/users",usersRouter);
versionOneRouter.use("/appSetting",appSettingRouter)

export { versionOneRouter };