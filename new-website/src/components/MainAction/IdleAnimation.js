import React from "react"
import anime from "animejs"

export default class IdleAnimation extends React.Component{
    componentDidMount(){
        const endSize = 1000
        const animation = anime({
            targets: this.element,
            loop: true,
            opacity: [.2, 0],
            width: endSize,
            height: endSize,
            easing: "easeOutSine",
            duration: 2000,
            autoplay: false
        })
        setTimeout(animation.play, this.props.offset || 0)
    }

    render(){
        return <div className="idle-animatiom" ref={ref => this.element = ref}/>
    }
}
