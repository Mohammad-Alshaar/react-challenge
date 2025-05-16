import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Sidemenu from "./Sidemenu";
function App() {
  const posts = [
    {
      id: 1,
      title: "أكاديمية ترميز",
      number: 20,
      description: "أكاديمية مخصصة لتعلم البرمجة",
    },
    {
      id: 2,
      title: "hello world",
      description: "this is the hello world article",
    },
    { id: 3, title: "Post 3", description: "this is the body of post 3" },
  ];
  const postsList = posts.map((post) => {
    return (
      <Post
        key={post.id}
        number={post.number}
        title={post.title}
        description={post.description}
      />
    );
  });
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "60%" }}>
          <div style={{ width: "70%" }}>{postsList}</div>
          <div style={{ width: "30%" }}>
            <Sidemenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
