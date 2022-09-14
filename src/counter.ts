import _ from "lodash";
const obj = {
  a: {
    b: "哈哈哈",
  },
};
const res = _.get(obj, ["a", "b"]);

export { res };
