import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Createpost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { PostListContextProvider } from "./Store/PostListContext";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListContextProvider>
      <div>
        <Header />
        <div className="d-flex">
          <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
          <div className="section">
            <div className="main-section">
              {selectedTab === "Home" ? <PostList /> : <Createpost />}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
