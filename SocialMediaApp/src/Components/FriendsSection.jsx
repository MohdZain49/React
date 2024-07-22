import { useState } from "react";
import useFriendContext, { FriendsSectionProvider } from "../Store/FriendSectionContext"
import FriendsList from "./FriendsList"
import Profile from "./Profile";
const FriendsSection = () => {
  return (
    <FriendsSectionProvider>
          {friendSection === "friend" ? <FriendsList setFriendSection={ setFriendSection} /> : <Profile />}
    </FriendsSectionProvider>
  );
}

export default FriendsSection;