import React, { useEffect } from "react"

export default function WindowTracker() {

    const [widthState, setWidthState] = React.useState(window.innerWidth)

    React.useEffect(()=>{

        function handleResize() {
            console.log("set up")
           setWidthState(window.innerWidth); 
        }

        window.addEventListener("resize", handleResize)

        return()=>{
            console.log("cleaning up")
            window.removeEventListener("resize", handleResize)
        }
    }, [])



    return (
        <h1>Window width: {widthState}</h1>
    )
}
