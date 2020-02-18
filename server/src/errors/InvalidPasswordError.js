import { APIError } from "@/server/src/errors/APIError";

export class InvalidPasswordError extends APIError {
  constructor () {
    super(401, "INVALID_PASSWORD", "The specified password is wrong.");
    this.name = "InvalidPasswordError";
  }
}
