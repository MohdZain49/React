import { useRef } from "react";
import usePostContext from "../Store/PostListContext";

const Createpost = () => {
  const { addPost } = usePostContext();
  const postTitleElement = useRef();
  const postDescriptionElement = useRef();
  const postTagsElements = useRef();

  const handleAddPost = (event) => {
    event.preventDefault();
    let post = {
      id: Date.now(),
      title: postTitleElement.current.value,
      body: postDescriptionElement.current.value,
      tags: postTagsElements.current.value.split(" "),
      reactions: {
        likes: Math.floor(Math.random() * 1000),
        dislikes: Math.floor(Math.random() * 1000),
      },
      views: Math.floor(Math.random() * 1000),
      userId: Math.floor(Math.random() * 1000),
    };
    addPost(post);
    postTitleElement.current.value = "";
    postDescriptionElement.current.value = "";
    postTagsElements.current.value = "";
  };

  return (
    <form className="createPost" onSubmit={handleAddPost}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Description
        </label>
        <textarea
          rows={5}
          className="form-control"
          id="body"
          ref={postDescriptionElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={postTagsElements}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Createpost;
