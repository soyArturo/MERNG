import postsResolvers from "./posts.js";
import usersResolvers from "./users.js";

export default {
  Query: {
    ...postsResolvers,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
