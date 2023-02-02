import { useState, useEffect } from "react";

// Deliverable 3: Demonstrate the unmounting and cleanup 
// phase of a component through `useEffect`

    // Return a cleanup function inside the `useEffect` 
    // with a console.log()

    // Open up the devtools to observe when the cleanup 
    // will occur during the stages of Component Lifecycle

function Timer() {
  const [timerCount, setTimerCount] = useState(0)

  useEffect(() => {
    // setTimerCount(prevVal => prevVal + 1)
    function doClick(event) {
      console.log('page clicked!')
    }
    document.addEventListener('click', doClick)

    // setInterval will continue to run outside the component lifecycle
    const intervalId = setInterval(() => {
      console.log('interval fired!')
      setTimerCount(prevVal => prevVal + 1)
    }, 1000)

    console.log(`intervalId=${intervalId}`)

    // Return a function that will clean up the interval behavior
    return () => {
      clearInterval(intervalId)
      console.log('interval cleared!')

      document.removeEventListener('click', doClick)
      console.log('click event removed!')
    }
  }, [])

  return (
    <h2>Timer: {timerCount}</h2>
  )
}

export default Timer;