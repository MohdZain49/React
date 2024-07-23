import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Components/MainSection/Header";
import Sidebar from "../Components/MainSection/Sidebar";
import Footer from "../Components/MainSection/Footer";
import { PostListContextProvider } from "../Store/PostListContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";

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
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
