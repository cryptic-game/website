import { APIError } from "@/server/src/errors/APIError";

export class InsufficientPermissionLevelError extends APIError {
  constructor (requiredLevel, actualLevel) {
    super(403, "INSUFFICIENT_PERMISSION_LEVEL", "Your permission level is insufficient for this action.", {
      requiredLevel,
      actualLevel
    });

    this.name = "InsufficientPermissionLevelError";
  }
}
