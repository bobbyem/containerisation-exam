import { useEffect } from "react";

export const TestButton = ({action}) => {
    useEffect(() => {
      console.log("I'm alive");
    
    }, [])
    
  return (
    <button onClick={action}>Test</button>
  )
}