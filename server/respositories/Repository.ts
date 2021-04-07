import { Model } from "mongoose";

/*====================*/

abstract class Repository {
  protected model!: Model<any>;
}

/*====================*/

export default Repository;
