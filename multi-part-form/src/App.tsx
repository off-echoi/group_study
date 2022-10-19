import { Input, InputForm, Steps, Button } from './Components'
import './App.css'
import { ChangeEventHandler } from 'react'
import useMultistepForm from './Hooks/useMultistepForm.ts'

// some API response
const stepsData = [
  {
    title: 'User Details',
    fields: [
      { idx: 1, title: 'First Name' },
      { idx: 2, title: 'Last Name' },
      { idx: 3, title: 'Age' },
    ],
  },
  {
    title: 'Address',
    fields: [
      { idx: 1, title: 'Street' },
      { idx: 2, title: 'City' },
      { idx: 3, title: 'State' },
      { idx: 4, title: 'Zip' },
    ],
  },
  {
    title: 'Account Creation',
    fields: [
      { idx: 1, title: 'Email' },
      { idx: 2, title: 'Password' },
    ],
  },
]
const stepInputGroup = stepsData.map((data) => {
  return (
    <div>
      {data.fields.map((field) => {
        return (
          <Input key={field.idx} label={field.title} id={field.title} onChange={(e: ChangeEventHandler) => console.log(e)} required={true}></Input>
        )
      })}
    </div>
  )
})

function App() {
  const { currentStepsIndex, stepIndex, step, next, prev, goto, isFirstStep, isLastStep } = useMultistepForm(stepInputGroup)

  return (
    <div className="App">
      <InputForm title={stepsData[currentStepsIndex].title}>
        <Steps currentIndex={currentStepsIndex + 1} stepIndex={stepIndex} />
        {step}
        <div className="button_group">
          {!isFirstStep && <Button text="Prev" onClick={prev} />}
          <Button text={isLastStep ? 'Finish' : 'Next'} onClick={next} />
        </div>
      </InputForm>
    </div>
  )
}

export default App
