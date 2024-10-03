import express from 'express';
import { addTermOfUseSchema } from './appsetting.schema.js';
import { ValidationSource, validator } from '../../../middlewares/validator.js';
import {verifyToken} from "../../../helpers/token.js"
import { addTermOfUse, getTermOfUse } from './appSetting.controller.js';
const appSettingRouter = express.Router();

appSettingRouter.post("/addTermOfUse", verifyToken,validator(addTermOfUseSchema),addTermOfUse);
appSettingRouter.get("/getTermOfUse",verifyToken,getTermOfUse)

export { appSettingRouter };