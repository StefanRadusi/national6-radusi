import "./FormField.css";

export function FormField(props) {
  const onChange = (event) => props.onChange(event.target.value);

  return (
    <div className="form-field">
      <p className="form-field-label">{props.label}</p>
      {props.isTextarea ? (
        <textarea
          className="form-field-input"
          onChange={onChange}
          style={{
            border: props.isInvalid ? "1px solid red" : "1px solid grey",
          }}
        />
      ) : (
        <input
          className="form-field-input"
          onChange={onChange}
          style={{
            border: props.isInvalid ? "1px solid red" : "1px solid grey",
          }}
        />
      )}
    </div>
  );
}
