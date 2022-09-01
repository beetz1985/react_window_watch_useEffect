import React from "react";

function WindowTrackerTwo() {


    const [widthState, setWidthState] = React.useState(window.innerWidth);


    function handleResize() {
        setWidthState(window.innerWidth)
    }


    React.useEffect(()=>{
        console.log("Set Event Listener")
        window.addEventListener("resize", handleResize);

        return ()=>{
            console.log("unbind EVent Listener")
            window.removeEventListener("resize", handleResize);
        }
    }, [])


    console.log(widthState)
    return(
        <h1>Window width is: {window.innerWidth}</h1>
    )
}

export default WindowTrackerTwo