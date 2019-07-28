import React from "react"
import Header from "./Header/Header.js"

export default props => {
    return(
        <div className="active-page">
            <Header onClose={props.onClose}/>
            <iframe src={props.src} title={props.src} frameBorder="0"/>
        </div>
    )
}
