import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Sidemenu from "./Sidemenu";
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "60%" }}>
          <div style={{ width: "70%" }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div style={{ width: "30%" }}>
            <Sidemenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
