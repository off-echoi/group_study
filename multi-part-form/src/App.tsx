import { Input, Steps, Button } from './Components'
import './App.css'
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react'
import useMultistepForm from './Hooks/useMultistepForm'
type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}
type UpdateFields = {
  updateFields: (fields: Partial<FormData>) => void
}
// some API response
const initialUserData: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
}

const UserDetail = ({ firstName, lastName, age, updateFields }: Partial<FormData> & UpdateFields) => {
  return (
    <>
      <h1>UserDetail</h1>
      <Input
        label="First Name"
        id="firstName"
        onChange={(e: ChangeEvent<Input>) => updateFields({ firstName: e.currentTarget.value })}
        required={true}
        value={firstName}></Input>
      <Input
        label="Last Name"
        id="lastName"
        onChange={(e: ChangeEvent<Input>) => updateFields({ lastName: e.currentTarget.value })}
        required={true}
        value={lastName}></Input>
      <Input
        label="Age"
        id="age"
        onChange={(e: ChangeEvent<Input>) => updateFields({ age: e.currentTarget.value })}
        type="number"
        required={true}
        value={age}></Input>
    </>
  )
}

const Address = ({ street, city, state, zip, updateFields }: Partial<FormData> & UpdateFields) => {
  return (
    <>
      <h1>Address</h1>
      <Input
        label="Street"
        id="street"
        onChange={(e: ChangeEvent<Input>) => updateFields({ street: e.currentTarget.value })}
        required={true}
        value={street}></Input>
      <Input
        label="City"
        id="city"
        onChange={(e: ChangeEvent<Input>) => updateFields({ city: e.currentTarget.value })}
        required={true}
        value={city}></Input>
      <Input
        label="State"
        id="state"
        onChange={(e: ChangeEvent<Input>) => updateFields({ state: e.currentTarget.value })}
        required={true}
        value={state}></Input>
      <Input
        label="zip"
        id="zip"
        onChange={(e: ChangeEvent<Input>) => updateFields({ zip: e.currentTarget.value })}
        required={true}
        value={zip}></Input>
    </>
  )
}

const AccountCreation = ({ email, password, updateFields }: Partial<FormData> & UpdateFields) => {
  return (
    <>
      <h1>Account Creation</h1>
      <Input
        label="Email"
        id="email"
        onChange={(e: ChangeEvent<Input>) => updateFields({ email: e.currentTarget.value })}
        type="email"
        required={true}
        value={email}></Input>
      <Input
        label="Password"
        id="password"
        onChange={(e: ChangeEvent<Input>) => updateFields({ password: e.currentTarget.value })}
        type="password"
        required={true}
        value={password}></Input>
    </>
  )
}

function App() {
  const [userData, setUserData] = useState(initialUserData)

  function updateFields(fields: Partial<FormData>) {
    setUserData((prev) => ({
      ...prev,
      ...fields,
    }))
  }

  const { currentStepsIndex, stepIndex, step, next, prev, isFirstStep, isLastStep } = useMultistepForm([
    <UserDetail {...userData} updateFields={updateFields} />,
    <Address {...userData} updateFields={updateFields} />,
    <AccountCreation {...userData} updateFields={updateFields} />,
  ])

  function updateUserData(e: KeyboardEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value)
    setUserData((prev) => ({
      ...prev,
      [e.currentTarget.id]: e.currentTarget.value,
    }))
  }

  function aa(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert('계정 생성 완료')
  }

  return (
    <div className="App">
      <form className="form" onSubmit={aa}>
        <Steps currentIndex={currentStepsIndex + 1} stepIndex={stepIndex} />
        {step}
        <div className="button_group">
          {!isFirstStep && <Button text="Prev" onClick={prev} />}
          <Button text={isLastStep ? 'Finish' : 'Next'} type="submit" />
        </div>
      </form>
    </div>
  )
}

export default App
