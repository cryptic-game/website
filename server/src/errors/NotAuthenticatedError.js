import { APIError } from "@/server/src/errors/APIError";

export class NotAuthenticatedError extends APIError {
  constructor () {
    super(401, "NOT_AUTHENTICATED", "You are not authenticated. Please log in.");
    this.name = "NotAuthenticatedError";
  }
}
