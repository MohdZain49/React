import useFriendContext from "../Store/FriendSectionContext";

const MyFriends = ({ friend }) => {
  return (
    <div className="ds-flex myFriends">
      <img
        className="myFriendImage"
        src={friend.image}
        alt="user-image"
      />
      <p className="myFriendName">{`${friend.firstName} ${friend.lastName}`}</p>
    </div>
  );
};

export default MyFriends;
