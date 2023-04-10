import React, { useEffect } from "react";

export default function (props: any) {
  function handleClick() {
    throw new Error("我错了");
  }
  return (
    <div>
      hello page
      <button onClick={handleClick}>点我报错</button>
    </div>
  );
}
