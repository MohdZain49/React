import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Createpost from "./Components/CreatePost";

function App() {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="section">
          <Createpost />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
