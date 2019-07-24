import React from "react"
import logo from "../../assets/img/logo.svg"
import PagesOverview from "../PagesOverview/PagesOverview.js"

const Logo = ({onClick}) => (
    <div className="logo-wrapper" onClick={onClick}>
        <img src={logo} alt="Logo" className="logo"/>
    </div>
)

export default class MainAction extends React.Component{
    state = {isPagesOverviewVisible: false}

    handleClick = () => {
        this.setState(state => ({isPagesOverviewVisible: !state.isPagesOverviewVisible}))
    }

    render(){
        return(
            <div className="main-action">
            <Logo onClick={this.handleClick}/>
            {this.state.isPagesOverviewVisible && <PagesOverview/>}
            </div>
        )
    }
}
