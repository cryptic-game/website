import React from "react"
import anime from "animejs"
import pages from "../pages/pages.json"
import Entry from "./Entry.js"

export default class PagesOverview extends React.Component{
    handleRequestRemove = () => {
        this.animation.reverse()
        this.animation.play()
        this.animation.finished.then(() => this.props.eventTarget.dispatchEvent(new CustomEvent("remove")))
    }

    componentDidMount(){
        const size = 95
        const radius = 150
        this.animation = anime({
            targets: ".pages-overview .pages-overview-entry",
            translateX: (e,i) => {
                const newValue = size/2+radius*Math.cos(size*i)
                e.dataset.translateX = newValue
                return newValue
            },
            translateY: (e,i) => {
                const newValue = size/2+radius*Math.sin(size*i)
                e.dataset.translateY = newValue
                return newValue
            },
            opacity: [0,1],
            easing: "easeOutSine",
            duration: 150,
            delay: anime.stagger(100)
        })

        this.props.eventTarget.addEventListener("request-remove", this.handleRequestRemove)
    }

    componentWillUnmount(){
        this.props.eventTarget.removeEventListener("request-remove", this.handleRequestRemove)
    }

    render(){
        return(
            <div className="pages-overview">
                {pages.map(page => <Entry {...page} key={page.name} onOpenWindow={this.props.onOpenWindow}/>)}
            </div>
        )
    }
}
