import { HTTP_MESSAGE, InternalServerErrorResponse, SuccessResponse, BadRequestResponse } from '../../../helpers/httpMessage.js';
import { termOfUse } from "../../../models/termOfUse.js";

const addTermOfUse = async (req, res) => {
    try {
        const { termOfUse, id } = req.body;
        if (id) {
            await termOfUse.findOneAndUpdate({ _id: id }, { termOfUse })
        } else {
            let termInfo = new termOfUse({
                termOfUse
            });
            termInfo.save();
        }
        return SuccessResponse(res, HTTP_MESSAGE.SUCCESS)
    } catch (error) {
        return InternalServerErrorResponse(res, HTTP_MESSAGE.INTERNAL_SERVER_ERROR, error);
    }
}

const getTermOfUse = async (req, res) => {
    try {
        let termOfUseDetails = await termOfUse.find();
        return SuccessResponse(res, HTTP_MESSAGE.SUCCESS, termOfUseDetails[0])
    } catch (error) {
        return InternalServerErrorResponse(res, HTTP_MESSAGE.INTERNAL_SERVER_ERROR, error);
    }
}

export { addTermOfUse, getTermOfUse }