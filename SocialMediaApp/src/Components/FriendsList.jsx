import Friends from "./Friends";
import MyFriends from "./MyFriends";
import useFriendContext from "../Store/FriendSectionContext";

const FriendsList = () => {
  const { suggestedFriendsList, myFriendsList } = useFriendContext();

  return (
    <div className="friendsLists">
      <div className="myFriendsList">
        {myFriendsList.map((friend) => (
          <MyFriends friend={friend} key={friend.id} />
        ))}
      </div>
      <div className="suggestedFriends">
        <p className="suggestionLabel">Suggested friends</p>
        {suggestedFriendsList.map((friend) => (
          <Friends friend={friend} key={friend.id} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
