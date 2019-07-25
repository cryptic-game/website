import React from "react"
import Header from "./Header/Header.js"

const winStartWidth = 500
const winStartHeight = 300

export default class Window extends React.Component{
    state = {expanded: false}
    mousedown = {header: false}

    componentDidMount(){
        // Setting appearing position of window
        this.window.style.left = Math.random() * (window.innerWidth - winStartWidth) + "px"
        this.window.style.top = Math.random() * (window.innerHeight - winStartHeight) + "px"
        this.pos = {x: this.window.offsetLeft, y: this.window.offsetTop}
        // Controls for moving window
        this.header.addEventListener("mousedown", e => {
            this.oldMousePos = {x: e.clientX, y: e.clientY}
            this.mousedown.header = true
        })
        this.header.addEventListener("mouseup", () => this.mousedown.header = false)
        document.addEventListener("mousemove", e => {
            if(this.mousedown.header){
                const x = this.oldMousePos.x - e.clientX
                const y = this.oldMousePos.y - e.clientY

                this.window.style.left = this.window.offsetLeft - x + "px"
                this.window.style.top = this.window.offsetTop - y + "px"

                this.oldMousePos = {x: e.clientX, y: e.clientY}
                this.pos = {x: this.window.offsetLeft, y: this.window.offsetTop}
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

    componentDidUpdate(prevProps, prevState){
        // Expanded changed to true -> expand window to fullscreen
        if(!prevState.expanded && this.state.expanded){
            this.window.style.left = ""
            this.window.style.top = ""
            this.window.classList.add("fullscreen")
        }else if(!this.state.expanded && prevState.expanded){
            this.window.style.left = this.pos.x + "px"
            this.window.style.top = this.pos.y + "px"
            this.window.classList.remove("fullscreen")
        }
    }

    handleExpand = () => this.setState({expanded: true})
    handleCompress = () => this.setState({expanded: false})
    handleClose = () => this.props.onClose()

    render(){
        return(
            <div className="window" ref={ref => this.window = ref}>
                <Header
                    expanded={this.state.expanded}
                    onExpand={this.handleExpand}
                    onCompress={this.handleCompress}
                    onClose={this.handleClose}
                    getRef={ref => this.header = ref}
                />
                <iframe src={this.props.href} title={this.props.href} frameBorder="0" ref={ref => this.iframe = ref}/>
                <div className="resize" ref={ref => this.resize = ref}/>
            </div>
        )
    }
}
