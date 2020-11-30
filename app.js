import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import { typeDefs } from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers/app.js";
import { MONGODB, port } from "./config.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen({ port });
  })
  .then((res) => {
    console.log(`Server runing at ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
