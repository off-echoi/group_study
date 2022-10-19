import { InputHTMLAttributes } from 'react'

interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

function Input({ id, label, ...props }: Iinput) {
  return (
    <div className="input_wrap">
      <label htmlFor={id}>{label}</label>
      <input type="text" name="" id={id} {...props} />
    </div>
  )
}
export default Input
