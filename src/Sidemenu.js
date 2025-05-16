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
  const buttons = [
    {
      id: 1,
      child: (
        <>
          <p>جديدة</p>
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
        </>
      ),
    },
    {
      id: 2,
      child: (
        <>
          <p>الأكثر قراءة</p>
          <img src="../public/pexels-pixabay-50594.jpg" alt="flower" />
        </>
      ),
    },
    {
      id: 3,
      child: (
        <>
          <p>مقالات مميزة</p>
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <img src="../public/pexels-pixabay-50594.jpg" alt="flower" />
        </>
      ),
    },
  ];
  const buttonsList = buttons.map((button) => {
    return <Button key={button.id}>{button.child}</Button>;
  });
  return (
    <div className={"Side"} style={sideStyle}>
      {buttonsList}
    </div>
  );
}
