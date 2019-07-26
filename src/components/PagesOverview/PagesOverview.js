import React from "react"
import anime from "animejs"
import pages from "../../config/pages.json"
import Entry from "./Entry.js"

const map = (num, in_min, in_max, out_min, out_max) => (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
const floor = num => Math.floor(num*100)/100

export default class PagesOverview extends React.Component{
    handleRequestRemove = () => {
        this.animation.reverse()
        this.animation.play()
        this.animation.finished.then(() => this.props.eventTarget.dispatchEvent(new CustomEvent("remove")))
    }

    componentDidMount(){
        const {mode} = this.props
        let size, radius, maxAngle, fn
        const radians = deg => deg * Math.PI / 180
        if(mode === "normal"){
            size = 95; radius = 150; maxAngle = 280
            fn = (i, method, f=1) => radius * method(map(i > 0 ? i - Math.floor(i/2) : i, 0, pages.length, 0, floor(radians(maxAngle)))) * f
        }else if(mode === "small"){
            size = 65; radius = 100; maxAngle = 360
            fn = (i, method) => radius * method(map(i, 0, Math.PI*radius/(size/2), 0, floor(radians(maxAngle)))-floor(radians(90)))
        }

        this.animation = anime({
            targets: ".pages-overview .pages-overview-entry",
            translateX: (e,i) => {
                const newValue = fn(i, Math.cos)
                e.dataset.translateX = newValue
                return newValue
            },
            translateY: (e,i) => {
                const newValue = fn(i, Math.sin, i % 2 === 0 ? -1 : 1)
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
                {pages.map(page => <Entry {...page} key={page.name} onClick={() => this.props.onOpenPage(page)} mode={this.props.mode}/>)}
            </div>
        )
    }
}
