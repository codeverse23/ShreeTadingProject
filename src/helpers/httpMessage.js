export const HTTP_MESSAGE = {
    SUCCESS: 'Success',
    SUCCESS_FULLY_CREATE:"User Create SuccessFully",
    LOGIN_SUCCESS:"User Login Successfully",
    BAD_REQUEST: 'Bad request',
    UNAUTHORIZED: 'Unauthorized request',
    CONFLICT: 'Conflict request',
    FORBIDDEN: 'Forbidden request',
    NOT_FOUND: 'Not found',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    CANNOT_DELETE: `This Record Can't Be Deleted, It Contains References to Other Data`,
    GATEWAY_TIMEOUT: 'Gateway timeout',
    UNKNOWN_ERROR: 'Unknown error',
    ACCOUNT_STATUS: "Account status",
    WRONG_PASSWORD: "Please Provide Correct Password",
    SUCCESSFUL_OTP: "OTP Successful",
    TOKEN_CREATED:"Token Created SuccessFully",
    ADMIN_PROFILE:"Admin Profile Show Successfully",
    PASSWORD_CHANGE:"Password Change Successfully",
    LOGIN:"Login Successfully",
    USER_LIST:"All User List Show Successfully",
    USER_INFO:"User Info Show Successfully",
    BLOCK_USER:"User Block Successfully",
    USER_NOT_FOUND:"User Not Found",
    USER_NAME_FOUND:"User Already Present",
    WRONG_PASSWORD:"USER ENTER WRONG PASSWORD",
    PASSWORD_CHANGE_REQUEST_SEND:"Password Change Request Send SuccessFully,"
  };
  
  const handleResponse = (res, status, success, message, data) => {
    const response = { status, success, data, message };
    return res.status(status).json(response);
  };
  
  export const SuccessResponse = (res, message = HTTP_MESSAGE.SUCCESS, data) => {
    return handleResponse(res, 200, true, message, data);
  };
  
  export const FailedResponse = (res, message = HTTP_MESSAGE.SUCCESS, data) => {
    return handleResponse(res, 200, false, message, data);
  };
  
  export const BadRequestResponse = (res, message = HTTP_MESSAGE.BAD_REQUEST, data) => {
    return handleResponse(res, 400, false, message, data);
  };
  
  export const UnauthorizedResponse = (res, message = HTTP_MESSAGE.UNAUTHORIZED, data) => {
    return handleResponse(res, 401, false, message, data);
  };
  
  export const InvalidTokenResponse = (res, message = HTTP_MESSAGE.UNAUTHORIZED, data) => {
    return handleResponse(res, 498, false, message, data);
  };
  
  export const ConflictRequestResponse = (res, message = HTTP_MESSAGE.CONFLICT, data) => {
    return handleResponse(res, 409, false, message, data);
  };
  
  export const NotFoundResponse = (res, message = HTTP_MESSAGE.NOT_FOUND, data) => {
    return handleResponse(res, 404, false, message, data);
  };
  
  export const ForbiddenResponse = (res, message = HTTP_MESSAGE.FORBIDDEN, data) => {
    return handleResponse(res, 403, false, message, data);
  };
  
  export const InternalServerErrorResponse = (res, message = HTTP_MESSAGE.INTERNAL_SERVER_ERROR, data) => {
    return handleResponse(res, 500, false, message, data);
  };
  
  export const CannotDeleteResponse = (res, message = HTTP_MESSAGE.CANNOT_DELETE, data) => {
    return handleResponse(res, 422, false, message, data);
  };
  
  export const UnprocessableResponse = (res, message = null, data) => {
    return handleResponse(res, 422, false, message, data);
  };