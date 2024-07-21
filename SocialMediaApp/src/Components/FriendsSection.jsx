import { FriendsSectionProvider } from "../Store/FriendSectionContext"
import FriendsList from "./FriendsList"

const FriendsSection = () => {
    return (
        <FriendsSectionProvider>
            <FriendsList />
        </FriendsSectionProvider>
    )
}

export default FriendsSection;