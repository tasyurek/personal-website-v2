import React, { useState, useEffect } from "react";
import axios from "axios";

const Stats = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    axios.get("/api/stats").then((data) => {
      setVisitorCount(data.data.total);
    });
  }, []);

  return (
    <div className="stats">
      <p className="stats__text">Number of visitors in this month.</p>
      <p className="rainbow-text">{visitorCount}</p>
    </div>
  );
};

export default Stats;
