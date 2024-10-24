import React, { useEffect, useState } from 'react'

const TrafficLights = () => {
    const [color, setColor] = useState("")

    return (
        <div className='containerLights'>
            <div className='horizontalRectangle1'></div>
            <div className='verticalRectangle'>
                <div className={`lights stop ${color == "red" ? "selected" : ""}`} onClick={() => setColor("red")}></div>
                <div className={`lights wait ${color == "yellow" ? "selected" : ""}`} onClick={() => setColor("yellow")}></div>
                <div className={`lights go ${color == "green" ? "selected" : ""}`} onClick={() => setColor("green")}></div>
            </div>
            <div className='horizontalRectangle2'></div>
            <div className='stick'></div>
        </div>
    )
}

export default TrafficLights






