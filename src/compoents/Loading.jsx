import React from "react";
import "../compoents/topUp/loading.css";
function Loading({ style }) {
  return <div className={`skeleton  ${style}`}></div>;
}

export default Loading;
