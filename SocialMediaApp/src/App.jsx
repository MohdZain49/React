import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Createpost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { PostListContextProvider } from "./Store/PostListContext";
import { useState } from "react";
import FriendsSection from "./Components/FriendsSection";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  let mainSection;
  if (selectedTab === 'Home') {
    mainSection = <PostList />
  } else if (selectedTab === "Create Post") {
    mainSection = <Createpost />
  } else if (selectedTab === "Friends") { 
    mainSection = <FriendsSection/>
  }
    return (
      <PostListContextProvider>
        <div>
          <Header />
          <div className="d-flex">
            <Sidebar
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />
            <div className="section">
              <div className="main-section">
                {mainSection}
                {/* {selectedTab === "Home" ? <PostList /> : <Createpost />} */}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </PostListContextProvider>
    );
}

export default App;
