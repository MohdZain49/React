import usePostContext from "../Store/PostListContext";
import Post from "./Post";

const PostList = () => {
  const { postList } = usePostContext();
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
