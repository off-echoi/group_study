import { ReactElement, useState } from 'react'

function useMultistepForm(steps: ReactElement[]) {
  const [currentStepsIndex, setCurrentStepsIndex] = useState(0)

  function next() {
    setCurrentStepsIndex((i) => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function prev() {
    setCurrentStepsIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  return {
    currentStepsIndex,
    stepIndex: steps.length,
    step: steps[currentStepsIndex],
    next,
    prev,
    isFirstStep: currentStepsIndex === 0,
    isLastStep: currentStepsIndex === steps.length - 1,
  }
}

export default useMultistepForm
