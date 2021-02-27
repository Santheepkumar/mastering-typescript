import { MikroORM } from "@mikro-orm/core";
// import { Post } from "./entries/Post";
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";

const queen = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });
  // const post = orm.em.create(Post, { title: "my 3nd first post" });
  // await orm.em.persistAndFlush(post);
  // console.log("------------sql2-------------");
  // await orm.em.nativeInsert(post);
  // const posts = await orm.em.find(Post, {});
  app.listen(4000, () => {
    console.log("Server started on localhost:4000");
  });
};

queen().catch((err) => {
  console.log(err);
});
console.log("hello ben");
