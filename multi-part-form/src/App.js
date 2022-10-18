import { Input, InputForm, Steps, Button } from './Components'
import './App.css'

function App() {
  return (
    <div className="App">
      <InputForm title="Test">
        <Steps currentIndex={1} stepIndex={3} />

        <Input label="label" id="id1"></Input>
        <Input label="label" id="id2"></Input>
        <Input label="label" id="id3" onChange={(e) => console.log(e)}></Input>
        <div className="button_group">
          <Button text="Prev" />
          <Button text="Next" />
        </div>
      </InputForm>
    </div>
  )
}

export default App
