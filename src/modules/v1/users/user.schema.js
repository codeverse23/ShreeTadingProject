import joi from "joi";
const createUserProfileSchema = joi.object({
    userName: joi.string().required(),
    password: joi.string().required(),
    mobile: joi.string().required(),
    name: joi.string().required(),
    email: joi.string().required(),
});

const userProfileSchema = joi.object({
    id: joi.string().required(),
})

const loginUserSchema = joi.object({
    userName: joi.string().required(),
    password: joi.string().required()
})

const changePasswordReqSchema = joi.object({
    userName: joi.string().required(), 
    email: joi.string().required(), 
    message: joi.string().optional()
});

const getBalSchema= joi.object({
    id:joi.string().required()
})
export { createUserProfileSchema, userProfileSchema, loginUserSchema, changePasswordReqSchema, getBalSchema }