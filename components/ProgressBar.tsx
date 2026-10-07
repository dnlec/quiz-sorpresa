import { useState } from "react";

export default function ProgressBar() {
  const [percentage, setPercentage] = useState(10);

  return (
    <div className="flex flex-col items-center">
      Progress Bar
      <div className="rounded bg-gray-300 w-80">
        <div className="bg-red-400 text-white text-center h-6" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
      <div>
        Input Percentage:
        <input
          type="number"
          min="0" max="100"
          value={percentage || 0}
          className="border border-black rounded-lg"
          onChange={(e) => {
            if (parseInt(e.target.value) < 0) {
              setPercentage(0);
            } else if (parseInt(e.target.value) > 100) {
              setPercentage(100);
            } else {
              setPercentage(parseInt(e.target.value));
            }
          }}
        />
      </div>
    </div>
  )
}