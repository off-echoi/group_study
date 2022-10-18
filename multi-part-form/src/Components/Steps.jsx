function Steps({ currentIndex, stepIndex }) {
  return (
    <p className="steps">
      {currentIndex} / {stepIndex}
    </p>
  )
}

export default Steps
