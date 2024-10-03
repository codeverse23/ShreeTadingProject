import joi from "joi";
const addTermOfUseSchema = joi.object({
    termOfUse: joi.string().optional(),
    id: joi.string().optional()
});

export { addTermOfUseSchema }