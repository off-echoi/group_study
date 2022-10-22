type StepsProps = {
  currentIndex: number
  stepIndex: number
}
function Steps({ currentIndex, stepIndex }: StepsProps) {
  return (
    <p className="steps">
      {currentIndex} / {stepIndex}
    </p>
  )
}

export default Steps
