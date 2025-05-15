import "./post.css";
export default function Post({ title = "", description = "", number = "" }) {
  return (
    <div className={"Post"}>
      <h2>{number}</h2>
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
    </div>
  );
}
