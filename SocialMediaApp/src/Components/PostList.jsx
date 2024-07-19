import { useState } from "react";
import usePostContext from "../Store/PostListContext";
import Post from "./Post";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = usePostContext();
  if (fetching) {
    return <LoadingSpinner />;
  } else if (!fetching && postList.length === 0) {
    return <h1 className="welcome-message">There is no post</h1>;
  } else if (!fetching) {
    return postList.map((post) => <Post key={post.id} post={post} />);
  }
};

export default PostList;
