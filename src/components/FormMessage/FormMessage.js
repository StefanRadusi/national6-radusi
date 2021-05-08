import "./FormMessage.css";

export function FormMessage(props) {
  return (
    <div className="form-message">
      <button onClick={props.onClose}>X</button>
      <p>Message sent!</p>
    </div>
  );
}
