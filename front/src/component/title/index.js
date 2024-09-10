import "./index.css";

export default function Component({ title, description }) {
  return (
    <div className="title">
      <h1 className="title__text">{title}</h1>
      <h4 className="title__description">{description}</h4>
    </div>
  );
}
