const Checkbox = (props) => (
    <input type="checkbox" className={props.className} onChange={() => props.handleCheckbox()} />
  )
  
export default Checkbox;
