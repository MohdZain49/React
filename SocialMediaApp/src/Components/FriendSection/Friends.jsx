import useFriendContext from "../../Store/FriendSectionContext";

const Friends = ({ friend }) => {
  const { handleAddFriend, handleDeleteFriend } = useFriendContext();
  return (
    <div className="friends">
      <div>
        <img className="userImage" src={friend.image} alt="user-image" />
      </div>
      <div className="friendInfo">
        <p className="friendName">{`${friend.firstName} ${friend.lastName}`}</p>
        <div className="btn-section">
          <button
            type="button"
            className="btn btn-primary FriendBtn"
            onClick={() => handleAddFriend(friend)}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-primary FriendBtn"
            onClick={() => handleDeleteFriend(friend.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friends;
