import { Input, InputForm, Steps, Button } from './Components'
import './App.css'
import { useCallback, useRef, useState } from 'react'

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

function App() {
  const [steps, setSteps] = useState({
    currentIndex: 1,
    stepIndex: stepsData.length,
  })
  const formField = useRef(null)

  const stepsControler = useCallback(
    (type) => {
      let currentIndex = steps.currentIndex
      if (type === 'next') {
        let isValid = true
        let aa = [...formField.current.children]
        aa.forEach((v) => {
          if (v.className === 'input_wrap') {
            if (!v.childNodes[1].value || (typeof v.childNodes[1].value === 'string' && v.childNodes[1].value.trim() === '')) {
              isValid = false
            }
          }
        })
        if (isValid) {
          currentIndex = steps.currentIndex + 1
          aa.forEach((v) => {
            if (v.className === 'input_wrap') {
              if (v.childNodes[1].value) {
                v.childNodes[1].value = ''
              }
            }
          })
        }
      } else {
        currentIndex = steps.currentIndex - 1
      }
      setSteps((prev) => ({
        ...prev,
        currentIndex: currentIndex,
      }))
    },
    [steps.currentIndex]
  )

  return (
    <div className="App">
      <InputForm title={stepsData[steps.currentIndex - 1].title} ref={formField}>
        <Steps currentIndex={steps.currentIndex} stepIndex={steps.stepIndex} />
        {stepsData[steps.currentIndex - 1].fields.map((field) => {
          return <Input key={field.idx} label={field.title} id={field.title} onChange={(e) => console.log(e)} required={true}></Input>
        })}

        <div className="button_group">
          {steps.currentIndex > 1 && <Button text="Prev" onClick={() => stepsControler('prev')} />}
          {steps.currentIndex !== steps.stepIndex && <Button onClick={() => stepsControler('next')} text="Next" />}
        </div>
      </InputForm>
    </div>
  )
}

export default App
