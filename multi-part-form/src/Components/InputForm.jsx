import { forwardRef } from 'react'

const InputForm = forwardRef(({ title, children }, ref) => {
  return (
    <form className="form" ref={ref}>
      <h1>{title}</h1>
      {children}
    </form>
  )
})
export default InputForm
