import "./ToDoItem.css";

export function ToDoItem(props) {
  console.log(props);

  return (
    <div className="to-do-item">
      <input type="checkbox" defaultChecked={props.checkValue} />
      <p>{props.label}</p>
      <img
        src="https://previews.123rf.com/images/iconscart/iconscart1903/iconscart190300018/118811393-trash-icon.jpg"
        alt="trash"
      />
    </div>
  );
}
