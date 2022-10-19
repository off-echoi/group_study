import { ReactNode } from 'react'

interface IinputForm {
  title: string
  children?: ReactNode
}

function InputForm({ title, children }: IinputForm) {
  return (
    <form className="form">
      <h1>{title}</h1>
      {children}
    </form>
  )
}
export default InputForm
