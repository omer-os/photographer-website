import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import website from "./website";
import Gallery from "./Gallery";
import categories from "./categories";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([Gallery, categories, website]),
});
m 