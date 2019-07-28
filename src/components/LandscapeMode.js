import React from "react"
import BackgroundVideo from "./BackgroundVideo.js"
import MainAction from "./MainAction/MainAction.js"
import Page from "./Page/Page.js"
import { PAGE_TYPES } from "../config/constants.js"

export default class LandscapeMode extends React.Component{
    state = {activePage: false}

    handleOpenPage = data => {
        switch(data.type){
            case PAGE_TYPES.CONTENT:
                this.setState({activePage: (
                        <Page
                            src={data.href}
                            onClose={this.handleClosePage}
                        />
                    )
                })
                break;

            case PAGE_TYPES.REDIRECT:
                const win = window.open(data.href, "_blank")
                win.focus()
                break;

            default: throw new Error("Missing page type for page", data)
        }
    }

    handleClosePage = () => this.setState({activePage: false})

    render(){
        return(
            <div className="app landscape">
                <BackgroundVideo/>
                <MainAction onOpenPage={this.handleOpenPage} mode="normal"/>
                {this.state.activePage || null}
            </div>
        )
    }
}
