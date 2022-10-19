import { ButtonHTMLAttributes } from 'react'

interface Ibutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

function Button({ text, type = 'button', onClick }: Ibutton) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
