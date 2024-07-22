import Friends from "./Friends";
import MyFriends from "./MyFriends";
import useFriendContext from "../Store/FriendSectionContext";

const FriendsList = ({ setFriendSection }) => {
  const { suggestedFriendsList, myFriendsList } = useFriendContext();

  return (
    <div className="friendsLists">
      <div>
        {myFriendsList.length !== 0 && (
          <div className="myFriendsList">
            <p className="suggestionLabel">Your friend</p>
            {myFriendsList.map((friend) => (
              <MyFriends
                friend={friend}
                key={friend.id}
              />
            ))}
          </div>
        )}
      </div>

      <div>
        {suggestedFriendsList.length !== 0 && (
          <div className="suggestedFriends">
            <p className="suggestionLabel">Suggested friends</p>
            {suggestedFriendsList.map((friend) => (
              <Friends
                friend={friend}
                key={friend.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsList;
