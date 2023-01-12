const Button = (props) => (
  <button
    className={props.className}
    onClick={() => props.handleButton(props.id)}>{props.children}</button>
)

export default Button;
