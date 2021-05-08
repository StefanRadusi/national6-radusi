import "./SendButton.css";

export function SendButton(props) {
  return (
    <button className="send-button" onClick={props.onClick}>
      Send
    </button>
  );
}
