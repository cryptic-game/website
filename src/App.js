import React from 'react'
import BackgroundVideo from "./components/BackgroundVideo.js"
import MainAction from "./components/MainAction/MainAction.js"
import Page from "./components/Page/Page.js"

// Enumeration of page types
const PAGE_TYPES = {
    CONTENT: "content",
    REDIRECT: "redirect"
}

export default class App extends React.Component{
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
            <div className="app">
                <BackgroundVideo/>
                <MainAction onOpenPage={this.handleOpenPage}/>
                {this.state.activePage || null}
            </div>
        )
    }
}
