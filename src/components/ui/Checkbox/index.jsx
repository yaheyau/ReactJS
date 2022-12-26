const Checkbox = (props) => (
    <input type="checkbox" checked={props.checked} className={props.className} onChange={() => props.handleCheckbox()} />
  )
  
export default Checkbox;
