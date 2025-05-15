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
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}
