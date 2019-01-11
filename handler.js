import uuid from "uuid/v4";

export default (context, callback) => {
  callback(undefined, { uuid: uuid() });
};
