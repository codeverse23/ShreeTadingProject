import bcrypt from 'bcrypt'
import { HTTP_MESSAGE, InternalServerErrorResponse, SuccessResponse, BadRequestResponse } from '../../../helpers/httpMessage.js';
import { Users } from '../../../models/users.js';
import { createToken } from "../../../helpers/token.js"
import { reqChangePassword } from '../../../models/reqChangePassword.js';

const createUserProfile = async (req, res) => {
    try {
        const { userName, password, mobile, name, email } = req.body;
        let userNameFound = await Users.findOne({ userName });
        if (userNameFound) {
            return BadRequestResponse(res, HTTP_MESSAGE.USER_NAME_FOUND);
        }
        let userDetails = await Users.findOne({ mobile, email });
        if (userDetails) {
            return BadRequestResponse(res, HTTP_MESSAGE.USER_NAME_FOUND);
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const users = new Users({
            name,
            userName,
            email,
            mobile,
            password: hashedPassword,
            role: "USER",
            loginStatus: false
        });

        await users.save();
        return SuccessResponse(res, HTTP_MESSAGE.SUCCESS_FULLY_CREATE)
    } catch (error) {
        return InternalServerErrorResponse(res, HTTP_MESSAGE.INTERNAL_SERVER_ERROR, error);
    }
}

const getUserProfile = async (req, res) => {
    try {
        const { id } = req.params;
        let userDetails = await Users.findOne({ _id: id }, { password: 0 });
        if (!userDetails) {
            return BadRequestResponse(res, HTTP_MESSAGE.USER_NOT_FOUND);
        }
        return SuccessResponse(res, HTTP_MESSAGE.SUCCESS, userDetails)
    } catch (error) {
        return InternalServerErrorResponse(res, HTTP_MESSAGE.INTERNAL_SERVER_ERROR, error);
    }
}

const loginUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        let userDetails = await Users.findOne({ userName });
        if (!userDetails) {
            return BadRequestResponse(res, HTTP_MESSAGE.USER_NOT_FOUND);
        }
        const validPassword = await bcrypt.compare(password, userDetails.password);
        if (!validPassword) {
            return BadRequestResponse(res, HTTP_MESSAGE.WRONG_PASSWORD);
        }
        let deviceId = ""
        const query = { token: req.headers.authorization.split(" ")[1] };
        const token = await createToken(userDetails._id, deviceId, "USER", query);
        return SuccessResponse(res, HTTP_MESSAGE.LOGIN_SUCCESS, { newToken: token })
    } catch (error) {
        return InternalServerErrorResponse(res, HTTP_MESSAGE.INTERNAL_SERVER_ERROR, error);
    }
}

const changePasswordReq = async (req, res) => {
    try {
        const { userName, email, message } = req.body;
        let userDetails = await Users.findOne({ userName });
        if (!userDetails) {
            return BadRequestResponse(res, HTTP_MESSAGE.USER_NOT_FOUND);
        }
        let passwordReq = new reqChangePassword({
            userName,
            email,
            message,
            status: "pending"
        })
        await passwordReq.save();
        return SuccessResponse(res, HTTP_MESSAGE.PASSWORD_CHANGE_REQUEST_SEND)
    } catch (error) {
        return InternalServerErrorResponse(res, HTTP_MESSAGE.INTERNAL_SERVER_ERROR, error);
    }
}

const getBal = async (req, res) => {
    try {
        const { id } = req.params;
        let totalBalance = await Users.findOne({ _id: id }, { balance: 1 });
        return SuccessResponse(res, HTTP_MESSAGE.SUCCESS, totalBalance)
    } catch (error) {
        return InternalServerErrorResponse(res, HTTP_MESSAGE.INTERNAL_SERVER_ERROR, error);
    }
}
export { createUserProfile, getUserProfile, loginUser, changePasswordReq, getBal }