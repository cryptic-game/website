import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as icons from "@fortawesome/free-solid-svg-icons"
import Description from "./Description.js"

export default class Entry extends React.Component{
    state = {showDescription: false}
    entry = null
    offsetMultiplicator = .65

    showDescription = () => this.setState({showDescription: true})
    hideDescription = () => this.setState({showDescription: false})

    componentDidMount(){
        this.entry.addEventListener("mouseenter", this.showDescription)
        this.entry.addEventListener("mouseleave", this.hideDescription)
    }
    componentWillUnmount(){
        this.entry.removeEventListener("mouseenter", this.showDescription)
        this.entry.removeEventListener("mouseleave", this.hideDescription)
    }

    render(){
        if(this.state.active) return (
            <div className="pages-overview-entry active"></div>
        )
        if(this.state.showDescription)
            var style = {transform: `translate(${this.entry.dataset.translateX*this.offsetMultiplicator}px, ${this.entry.dataset.translateY*this.offsetMultiplicator}px)`}
        return(
            <div className="pages-overview-entry" ref={ref => this.entry = ref} onClick={this.props.onClick} style={{backgroundColor: this.props.color || null}}>
                <FontAwesomeIcon icon={icons[this.props.icon]} className="icon" size="3x"/>
                {this.state.showDescription && <Description content={this.props.description} style={style}/>}
            </div>
        )
    }
}
