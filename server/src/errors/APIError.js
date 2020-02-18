export class APIError extends Error {
  constructor (statusCode, code, message, details) {
    super(message);

    this.name = "APIError";
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}
