import React, { useEffect, useState } from 'react'

const TrafficLights = () => {
    const [color, setColor] = useState("")
    useEffect(() => {
        switch (color) {
            case "red":
                document.querySelector(".stop").className = "lights stop selected"
                document.querySelector(".wait").className = "lights wait"
                document.querySelector(".go").className = "lights go"
                break;

            case "yellow":
                document.querySelector(".wait").className = "lights wait selected"
                document.querySelector(".stop").className = "lights stop"
                document.querySelector(".go").className = "lights go"
                break;

            case "green":
                document.querySelector(".go").className = "lights go selected"
                document.querySelector(".stop").className = "lights stop"
                document.querySelector(".wait").className = "lights wait"
                break;

        }
    }, [color])
    return (
        <div className='containerLights'>
            <div className='horizontalRectangles1'></div>
            <div className='verticalRectangle'>
                <div className='lights stop' onClick={() => setColor("red")}></div>
                <div className='lights wait' onClick={() => setColor("yellow")}></div>
                <div className='lights go' onClick={() => setColor("green")}></div>
            </div>
            <div className='horizontalRectangles2'></div>
            <div className='stick'></div>

        </div>
    )
}

export default TrafficLights