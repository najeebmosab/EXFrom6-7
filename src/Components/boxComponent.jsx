import "../Components/boxComponent.css"
import { useState } from 'react'

function Box(props) {
        
    return (
        <div>
            <div className={props.myFlag ? 'box' : ''}></div>
        </div>
    )
}

export default Box