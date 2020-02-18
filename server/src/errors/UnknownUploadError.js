import { APIError } from "@/server/src/errors/APIError";

export class UnknownUploadError extends APIError {
  constructor (id) {
    super(404, "UNKNOWN_UPLOAD", "There is no upload with this ID.", { id });
    this.name = "UnknownUploadError";
  }
}
