import React from 'react'
import BackgroundVideo from "./components/BackgroundVideo.js"
import MainAction from "./components/MainAction/MainAction.js"
import Page from "./components/Page/Page.js"

export default class App extends React.Component{
    state = {activePage: false}

    handleOpenPage = href => {
        this.setState({activePage: (
                <Page
                    src={href}
                    onClose={this.handleClosePage}
                />
            )
        })
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
