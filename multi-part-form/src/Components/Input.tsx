import { InputHTMLAttributes } from 'react'

type Props = {
  label: string
}
type InpurProps = Props & InputHTMLAttributes<HTMLInputElement>

function Input({ id, label, ...props }: InpurProps) {
  return (
    <div className="input_wrap">
      <label htmlFor={id}>{label}</label>
      <input type="text" name="" id={id} {...props} />
    </div>
  )
}
export default Input
