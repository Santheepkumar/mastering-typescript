import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entries/Post";
import microConfig from "./mikro-orm.config";

const queen = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const post = orm.em.create(Post, { title: "my 3nd first post" });
  await orm.em.persistAndFlush(post);
  // console.log("------------sql2-------------");
  // await orm.em.nativeInsert(post);
  const posts = await orm.em.find(Post, {});
  console.log(posts);
};

queen().catch((err) => {
  console.log(err);
});
console.log("hello ben");
