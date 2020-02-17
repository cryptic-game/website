import { BlogPost } from "./BlogPost";
import { Upload } from "./Upload";
import { User } from "./User";

const models = { BlogPost, Upload, User };

Object.values(models).forEach(model => {
  if (model.associate !== undefined) {
    model.associate(models);
  }
});

export default models;
