import { useEffect, useState } from 'react'
import './progress.css'


// 1. created Progress bar component
const ProgressBar = ({ progress }) => {

  // 6. when we reload progress bar fill with percentage we will use hooks useEffect, useState as well for animate use transition in external-CSS
  const [animatedProgess, setAnimatedProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100)
  }, [progress])

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // 2. dynamic width of percentage to the progress bar in CSS
          // width: `${progress}%`,

          // 5. dynamic width of percentage to the progress bar in inline-CSS instead of transform width
          transform: `translateX(${animatedProgess - 100}%)`,
          // 4. dynamic text color to the progress bar percentage in CSS
          color: animatedProgess < 5 ? 'black' : 'white'
        }}

      >
        {progress}%
      </div>
    </div>
  )
}

export default function ProgressComp() {
  const bars = [1, 5, 20, 40, 70, 90, 100]
  return (
    <div>
      {/* 3. create multiple progress bars dynamic array using Map method */}
      {bars.map((value) => { return (<ProgressBar key={value} progress={value} />) })}
    </div>
  )
}



// step-by-step approach
// 1. created Progress bar component
// 2. dynamic width of percentage to the progress bar in CSS
// 3. create multiple progress bars dynamic array using Map method
// 4. dynamic text color to the progress bar in CSS
// 5. dynamic width of percentage to the progress bar in inline-CSS instead of transform width
// 6. when we reload progress bar fill with percentage we will use hooks useEffect, useState as well for animate use transition in external-CSS