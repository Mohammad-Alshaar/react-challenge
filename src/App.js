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
            <Post
              number="20"
              title="أكاديمية ترميز"
              description="أكاديمية مخصصة لتعليم البرمجة"
            />
            <Post
              title="hello world"
              description="this is the hello world article"
            />
            <Post title="Post 3" description="this is the body of post 3" />
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
