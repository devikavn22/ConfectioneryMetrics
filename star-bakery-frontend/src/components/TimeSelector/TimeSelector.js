import React, { useState } from "react";

function TimeSelector({ onTimeRangeChange }) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleTimeRangeChange = () => {
    onTimeRangeChange({ startTime, endTime });
  };

  return (
    <div>
      <h2>Time Selector</h2>
      <div>
        <label>Start Time: </label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label>End Time: </label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <button onClick={handleTimeRangeChange}>Apply</button>
    </div>
  );
}

export default TimeSelector;