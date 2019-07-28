import React from "react"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import Action from "./Action.js"

export default props => {
    return(
        <header className="custom-header">
            <Action type="close" onClick={props.onClose} icon={faTimes}/>
        </header>
    )
}
