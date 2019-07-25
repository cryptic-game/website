import React from "react"
import anime from "animejs"
import pages from "../pages/pages.json"
import Entry from "./Entry.js"

export default class PagesOverview extends React.Component{
    componentDidMount(){
        const size = 95
        const radius = 150
        anime({
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
            easing: "easeOutSine",
            duration: 150,
            delay: anime.stagger(100)
        })
    }

    render(){
        return(
            <div className="pages-overview">
                {pages.map(page => <Entry {...page} key={page.name} onOpenWindow={this.props.onOpenWindow}/>)}
            </div>
        )
    }
}
