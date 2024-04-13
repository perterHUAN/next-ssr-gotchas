"use client";
import React from "react";
import Spinner from "../Spinner/Spinner";

function Counter() {
  // first render, we get null value for count,
  // which states we don't get real value from localstorage.
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    const savedCount = window.localStorage.getItem("saved-count");
    if (savedCount) {
      setCount(Number(savedCount));
    } else setCount(0);
  }, []);
  React.useEffect(() => {
    window.localStorage.setItem("saved-count", count);
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {count !== null ? count : <Spinner />}
    </button>
  );
}

export default Counter;
