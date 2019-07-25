import React from "react"
import { faTimes, faExpand, faCompress } from "@fortawesome/free-solid-svg-icons"
import Action from "./Action.js"

export default class Header extends React.Component{
    render(){
        return(
            <header className="custom-header" ref={this.props.getRef}>
                {
                    !this.props.expanded ?
                    <Action type="expand" onClick={this.props.onExpand} icon={faExpand}/> :
                    <Action type="compress" onClick={this.props.onCompress} icon={faCompress}/>
                }
                <Action type="close" onClick={this.props.onClose} icon={faTimes}/>
            </header>
        )
    }
}
