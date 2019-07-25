import React, { useEffect } from "react"
import anime from "animejs"

export default ({mouse, onAnimationFinished}) => {
    let node

    useEffect(() => {
        node.style.left = mouse.x + "px"
        node.style.top = mouse.y + "px"
        const expandSize = 100

        const animation = anime({
            targets: node,
            width: expandSize,
            height: expandSize,
            left: node.offsetLeft - expandSize / 2,
            top: node.offsetTop - expandSize / 2,
            opacity: 0,
            easing: "linear",
            duration: 350
        })
        animation.finished.then(onAnimationFinished)
    })

    return <div ref={ref => node = ref} className="expand-indicator"/>
}
