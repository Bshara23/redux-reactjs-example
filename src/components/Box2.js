import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Counter, setCounter } from "../redux/Global";
import "../App.css";
export default function Box2() {
  const dispatch = useDispatch();
  const cnt = useSelector(Counter);

  const inc = () => {
    dispatch(setCounter(cnt - 1));
  };

  return (
    <div className="box">
      <button onClick={() => inc()}>Decrease by 1</button>
      <p>Counter: {cnt}</p>
    </div>
  );
}
