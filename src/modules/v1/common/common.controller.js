import {
    HTTP_MESSAGE,
    InternalServerErrorResponse,
    SuccessResponse,
    BadRequestResponse,
} from "./../../../helpers/httpMessage.js";
import { createToken } from "../../../helpers/token.js";
import { Users } from "../../../models/users.js";


const generateAuthToken = async (req, res) => {
    try {
        const { id, deviceId } = req.body;
        let query;
        let details;
        let roles = "USER"; // Default role if not found
        if (id) {
            // Check if ID exists in admin or users collections
            details = await Admin.findOne({ _id: id }) || await Users.findOne({ _id: id });
            if (!details) {
                return BadRequestResponse(res, HTTP_MESSAGE.NOT_FOUND);
            }
            roles = details.role; // Set roles from found details
            query = { id: id };
        }

        if (deviceId) {
            query = { deviceId: deviceId };
        }

        // Create the token
        const token = await createToken(id, deviceId, roles, query);
        return SuccessResponse(res, HTTP_MESSAGE.TOKEN_CREATED, { token });
    } catch (err) {
        return InternalServerErrorResponse(
            res,
            HTTP_MESSAGE.INTERNAL_SERVER_ERROR,
            err
        );
    }
};

//Function For List Of Employee api
const systemInforList = async (req, res) => {
    try {
      const list = await System.find({});
      return SuccessResponse(res, HTTP_MESSAGE.EMP_LIST, { details: list });
    } catch (err) {
      return InternalServerErrorResponse(res, HTTP_MESSAGE.INTERNAL_SERVER_ERROR, err);
    }
  };
  
  export { generateAuthToken, systemInforList };