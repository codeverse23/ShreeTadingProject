import { BadRequestResponse } from '../helpers/httpMessage.js';

export const ValidationSource = {
  BODY: "body",
  HEADER: "headers",
  QUERY: "query",
  PARAM: "params",
};

const validator = (schema, source = ValidationSource.BODY) =>
  (req, res, next) => {
    try {
      const { error } = schema.validate(req[source]);
      if (!error) {
        return next();
      }
      const { details } = error;
      const message = details
        .map((i) => i.message.replace(/['"]+/g, ""))
        .join(",");
      BadRequestResponse(res, message);
    } catch (error) {
      BadRequestResponse(res, "Validation error", error);
    }
  };

export { validator };