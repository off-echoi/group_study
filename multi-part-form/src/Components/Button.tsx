import { ButtonHTMLAttributes } from 'react'

type Props = {
  text: string
}
type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ text, type = 'button', onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
