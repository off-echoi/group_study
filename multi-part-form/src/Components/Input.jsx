function Input({ id, label, ...props }) {
  return (
    <div className="input_wrap">
      <label htmlFor={id}>{label}</label>
      <input type="text" name="" id={id} {...props} />
    </div>
  )
}
export default Input
