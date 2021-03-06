import Post from "../../models/Post.js";

export default {
  async getPosts() {
    try {
      const posts = await Post.find();
      return posts;
    } catch (err) {
      throw new Error(err);
    }
  },
};
