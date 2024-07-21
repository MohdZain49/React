import { createContext, useContext, useEffect, useState } from "react";

const FriendsSectionContext = createContext({
  suggestedFriendsList: [],
  myFriendsList: [],
  handleAddFriend: () => {},
});

export const FriendsSectionProvider = ({ children }) => {
  const [suggestedFriendsList, setSuggestedFriendsList] = useState([]);
  const [myFriendsList, setMyFriendsList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => setSuggestedFriendsList(res.users));
  }, []);

  const handleAddFriend = (friend) => {
    setMyFriendsList((prevList) => [friend, ...prevList]);
  };

  return (
    <FriendsSectionContext.Provider
      value={{ suggestedFriendsList, myFriendsList, handleAddFriend }}
    >
      {children}
    </FriendsSectionContext.Provider>
  );
};

const useFriendContext = () => {
  return useContext(FriendsSectionContext);
};

export default useFriendContext;
