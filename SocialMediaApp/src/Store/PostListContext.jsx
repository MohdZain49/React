import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
  fetching: null,
});

const postListReducer = (prevPostList, action) => {
  let newPostList = prevPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...prevPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    newPostList = prevPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

export const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    let newPost = {
      type: "ADD_POST",
      payload: {
        post,
      },
    };
    dispatchPostList(newPost);
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));

    setFetching(false);

    return () => {
      controller.abort;
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, addInitialPosts, fetching }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const usePostContext = () => {
  return useContext(PostListContext);
};

export default usePostContext;
