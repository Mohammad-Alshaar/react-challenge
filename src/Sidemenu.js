import Button from "./Button";

export default function Sidemenu() {
  const sideStyle = {
    border: "4px solid rgb(1, 117, 117)",
    padding: "10px 5px",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  return (
    <div className={"Side"} style={sideStyle}>
      <Button>
        <p>جديدة</p>
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </span>
      </Button>
      <Button>
        <p>الأكثر قراءة</p>
        <img src="../public/pexels-pixabay-50594.jpg" alt="flower" />
      </Button>
      <Button>
        <p>مقالات مميزة</p>
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </span>
        <img src="../public/pexels-pixabay-50594.jpg" alt="flower" />
      </Button>
    </div>
  );
}
