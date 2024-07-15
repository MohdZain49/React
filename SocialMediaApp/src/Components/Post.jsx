import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import usePostContext from "../Store/PostListContext";

const Post = ({ post }) => {
  const { deletePost } = usePostContext();

  return (
    <div className="card" style={{ width: "35rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>

        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        <div className="alert alert-primary" role="alert">
          <div className="reactionAndViews">
            <div className="reactionSection">
              <div>
                <BiLike />
                <span className="label">{` ${post.reactions.likes} likes`}</span>
              </div>
              <div>
                <BiDislike />
                <span className="label">{` ${post.reactions.dislikes} dislikes`}</span>
              </div>
            </div>
            <p className="views label">{`${post.views} views`}</p>
          </div>

          {post.tags.map((tag) => (
            <a
              href="#"
              className="btn btn-primary tag"
              key={post.tags.indexOf(tag)}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
