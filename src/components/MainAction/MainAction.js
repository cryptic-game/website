import React from "react"
import logo from "../../assets/img/logo.svg"
import logoWithText from "../../assets/img/logoWithText.svg"
import PagesOverview from "../PagesOverview/PagesOverview.js"
import IdleAnimation from "./IdleAnimation.js"

const Logo = ({onClick, mode}) => (
    <div className="logo-wrapper" onClick={onClick}>
        <img src={mode === "normal" ? logoWithText : mode === "small" ? logo : null} alt="Logo" className="logo" draggable="false"/>
    </div>
)

const pagesOverviewEventTarget = new EventTarget()

export default class MainAction extends React.Component{
    state = {isPagesOverviewVisible: false, isIdle: false}
    idleDelay = this.props.mode === "small" ? 0 : 5000

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
                <Logo onClick={this.handleClick} mode={this.props.mode}/>
                {
                    this.state.isPagesOverviewVisible ? <PagesOverview onOpenPage={this.props.onOpenPage} eventTarget={pagesOverviewEventTarget} mode={this.props.mode}/> :
                    this.state.isIdle && !this.props.mode === "small" ? <IdleAnimation/> : null
                }
            </div>
        )
    }
}
