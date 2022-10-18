function InputForm({ title, children }) {
  return (
    <form className="form">
      <h1>{title}</h1>
      {children}
    </form>
  )
}
export default InputForm
