import "./button.css";
export default function Button(props) {
  console.log(props);
  return (
    <div className={"Button"}>
      <button>{props.children}</button>
    </div>
  );
}
