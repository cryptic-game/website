import { APIError } from "@/server/src/errors/APIError";

export class UnknownUsernameError extends APIError {
  constructor (username) {
    super(404, "UNKNOWN_USERNAME", "There is no user with the specified username.", { username });
    this.name = "UnknownUsernameError";
  }
}
