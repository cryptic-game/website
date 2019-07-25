import React from "react"
import Header from "./Header/Header.js"

const winStartWidth = 700
const winStartHeight = 500

export default class Window extends React.Component{
    state = {expanded: false}
    mousedown = {header: false, resize: false}

    componentDidMount(){
        // Setting initial position of window
        this.window.style.left = Math.random() * (window.innerWidth - winStartWidth) + "px"
        this.window.style.top = Math.random() * (window.innerHeight - winStartHeight) + "px"
        this.window.style.width = winStartWidth + "px"
        this.window.style.height = winStartHeight + "px"

        this.pos = {x: this.window.offsetLeft, y: this.window.offsetTop}
        this.dimensions = {width: this.window.clientWidth, height: this.window.clientHeight}

        // Controls for moving window
        this.header.addEventListener("mousedown", this.handleHeaderMouseDown)
        this.header.addEventListener("mouseup", this.handleHeaderMouseUp)
        document.addEventListener("mousemove", this.handleHeaderMouseMove)

        // Controls for resizing window
        this.resize.addEventListener("mousedown", this.handleResizeMouseDown)
        this.resize.addEventListener("mouseup", this.handleResizeMouseUp)
        document.addEventListener("mousemove", this.handleResizeMouseMove)
    }

    resetStyles = () => {
        this.window.style.left = ""
        this.window.style.top = ""
        this.window.style.width = ""
        this.window.style.height = ""
    }

    applyStyles = () => {
        console.log(this.pos)
        this.window.style.left = this.pos.x + "px"
        this.window.style.top = this.pos.y + "px"
        this.window.style.width = this.dimensions.width + "px"
        this.window.style.height = this.dimensions.height + "px"
    }

    activateFullscreen = () => {
        this.resetStyles()
        this.window.classList.add("fullscreen")
    }

    deactivateFullscreen = () => {
        this.applyStyles()
        this.window.classList.remove("fullscreen")
    }

    componentDidUpdate(prevProps, prevState){
        // Expanded changed to true -> expand window to fullscreen
        if(!prevState.expanded && this.state.expanded)
            this.activateFullscreen()
        else if(!this.state.expanded && prevState.expanded)
            this.deactivateFullscreen()
    }

    isHoveringOverButton = (mouseX, mouseY) => {
        return Array.from(this.window.getElementsByClassName("control")).some(btn => {
            const {x, y, width, height} = btn.getBoundingClientRect()
            return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height
        })
    }

    handleHeaderMouseDown = e => {
        // When user wants to move screen while fullscreen is open -> close fullscreen
        if(this.state.expanded && !this.isHoveringOverButton(e.clientX, e.clientY)){
            this.setState({expanded: false})
            // Set window to same position on the x axis as the user has clicked it while it was in fullscreen mode
            this.window.style.left = e.clientX - (e.clientX/window.innerWidth*this.window.clientWidth) + "px"
            this.window.style.top = e.clientY + "px"
        }
        this.oldMousePos = {x: e.clientX, y: e.clientY}
        this.mousedown.header = true
    }

    handleHeaderMouseUp = () => this.mousedown.header = false

    handleHeaderMouseMove = e => {
        if(this.mousedown.header){
            const x = this.oldMousePos.x - e.clientX
            const y = this.oldMousePos.y - e.clientY

            this.window.style.left = this.window.offsetLeft - x + "px"
            this.window.style.top = this.window.offsetTop - y + "px"

            if(this.window.offsetTop < 5){
                this.setState({expanded: true})
                this.mousedown.header = false
            }

            this.oldMousePos = {x: e.clientX, y: e.clientY}
            this.pos = {x: this.window.offsetLeft, y: this.window.offsetTop}
        }
    }

    handleResizeMouseDown = e => {
        this.startPos = {x: e.clientX, y: e.clientY}
        this.startDimensions = {width: this.window.offsetWidth, height: this.window.offsetHeight}
        this.mousedown.resize = true
    }

    handleResizeMouseUp = () => this.mousedown.resize = false

    handleResizeMouseMove = e => {
        if(this.mousedown.resize && !this.state.expanded){
            const newWidth = this.startDimensions.width + e.clientX - this.startPos.x
            const newHeight = this.startDimensions.height + e.clientY - this.startPos.y
            this.window.style.width = newWidth + "px"
            this.window.style.height = newHeight + "px"
            this.dimensions = {width: newWidth, height: newHeight}
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
