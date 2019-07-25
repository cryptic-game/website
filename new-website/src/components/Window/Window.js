import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const winStartWidth = 500
const winStartHeight = 300

export default class Window extends React.Component{
    mousedown = {header: false}

    componentDidMount(){
        // Setting appearing position of window
        this.window.style.left = Math.random() * (window.innerWidth - winStartWidth) + "px"
        this.window.style.top = Math.random() * (window.innerHeight - winStartHeight) + "px"

        // Controls for moving window
        this.header.addEventListener("mousedown", e => {
            this.oldPos = {x: e.clientX, y: e.clientY}
            this.mousedown.header = true
        })
        this.header.addEventListener("mouseup", () => this.mousedown.header = false)
        document.addEventListener("mousemove", e => {
            if(this.mousedown.header){
                const x = this.oldPos.x - e.clientX
                const y = this.oldPos.y - e.clientY

                this.window.style.left = this.window.offsetLeft - x + "px"
                this.window.style.top = this.window.offsetTop - y + "px"

                this.oldPos = {x: e.clientX, y: e.clientY}
            }
        })

        // Controls for resizing window
        this.resize.addEventListener("mousedown", e => {
            this.startPos = {x: e.clientX, y: e.clientY}
            this.startDimensions = {width: this.window.offsetWidth, height: this.window.offsetHeight}
            this.mousedown.resize = true
        })
        this.resize.addEventListener("mouseup", () => this.mousedown.resize = false)
        document.addEventListener("mousemove", e => {
            if(this.mousedown.resize){
                this.window.style.width = this.startDimensions.width + e.clientX - this.startPos.x + "px"
                this.window.style.height = this.startDimensions.height + e.clientY - this.startPos.y + "px"
            }
        })
    }

    render(){
        return(
            <div className="window" ref={ref => this.window = ref}>
                <header className="custom-header" ref={ref => this.header = ref}>
                    <div className="control close" onClick={() => this.props.onClose()}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </header>
                <iframe src={this.props.href} title={this.props.href} frameBorder="0" ref={ref => this.iframe = ref}/>
                <div className="resize" ref={ref => this.resize = ref}/>
            </div>
        )
    }
}
