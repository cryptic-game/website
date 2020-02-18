import { APIError } from "@/server/src/errors/APIError";

export class InternalError extends APIError {
  constructor () {
    super(500, "INTERNAL_ERROR", "An internal server error occurred.");
    this.name = "InternalError";
  }
}
