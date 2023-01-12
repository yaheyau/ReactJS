const Input = (props) => (
  <input 
    type={props.type}
    name={props.name}
    value={props.value}
    className={props.className}
    disabled={props.disabled}
    onChange={(e) => props.handleInput(e)} />
);

export default Input;
