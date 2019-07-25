import React from "react"
import logo from "../../assets/img/logo.svg"
import PagesOverview from "../PagesOverview/PagesOverview.js"
import IdleAnimation from "./IdleAnimation.js"

const Logo = ({onClick}) => (
    <div className="logo-wrapper" onClick={onClick}>
        <img src={logo} alt="Logo" className="logo" draggable="false"/>
    </div>
)

const pagesOverviewEventTarget = new EventTarget()

export default class MainAction extends React.Component{
    state = {isPagesOverviewVisible: false, isIdle: false}
    idleDelay = 5000

    handleRemove = () => {
        this.setState({isPagesOverviewVisible: false})
        pagesOverviewEventTarget.removeEventListener("remove", this.handleRemove)
    }

    handleClick = () => {
        if(!this.state.isPagesOverviewVisible) this.setState({isPagesOverviewVisible: true})
        else {
            pagesOverviewEventTarget.dispatchEvent(new CustomEvent("request-remove"))
            pagesOverviewEventTarget.addEventListener("remove", this.handleRemove)
        }

    }

    setIdleTimeout = () => this.timeout = setTimeout(() => this.setState({isIdle: true}), this.idleDelay)

    componentDidUpdate(prevProps, prevState){
        if(this.state.isIdle && this.state.isPagesOverviewVisible){
            clearTimeout(this.timeout)
            this.setState({isIdle: false})
        }
    }

    componentDidMount(){this.setIdleTimeout()}

    render(){
        return(
            <div className="main-action">
                <Logo onClick={this.handleClick}/>
                {
                    this.state.isPagesOverviewVisible ? <PagesOverview onOpenWindow={this.props.onOpenWindow} eventTarget={pagesOverviewEventTarget}/> :
                    this.state.isIdle ? <><IdleAnimation/><IdleAnimation offset={100}/></> : null
                }
            </div>
        )
    }
}
