import { useEffect } from "react";

export const TestButton = ({action}) => {
  return (
    <button onClick={action}>Say hi to the backend</button>
  )
}