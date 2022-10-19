interface Isteps {
  currentIndex: number
  stepIndex: number
}
function Steps({ currentIndex, stepIndex }: Isteps) {
  return (
    <p className="steps">
      {currentIndex} / {stepIndex}
    </p>
  )
}

export default Steps
