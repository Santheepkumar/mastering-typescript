import { _prod_ } from "./constents";
import { Post } from "./entries/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    // transactional: true,
    // disableForeignKeys: false,
  },
  entities: [Post],
  dbName: "reddit",
  user: "santheepkumar",
  password: "honey",
  // dbName: "reddit-test",
  // user: "sandy",
  // password: "sandy",
  type: "postgresql",
  debug: !_prod_,
} as Parameters<typeof MikroORM.init>[0];
