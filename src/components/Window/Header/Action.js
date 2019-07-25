import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default props => (
    <div className={`control ${props.type}`} onClick={props.onClick}>
        <FontAwesomeIcon icon={props.icon}/>
    </div>
)
