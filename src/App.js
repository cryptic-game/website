import React from 'react'
import BackgroundVideo from "./components/BackgroundVideo.js"
import MainAction from "./components/MainAction/MainAction.js"
import Window from "./components/Window/Window.js"

const Windows = ({windows, onClose}) => {
    return windows.map(win => (
        <Window
            href={win.href}
            onClose={onClose.bind(this, win.key)}
            key={win.key}
        />
    ))
}

export default class App extends React.Component{
    state = {currentWindows: []}

    handleOpenWindow = href => {
        const key = Date.now()
        const newWindow = {
            href,
            key
        }
        this.setState({currentWindows: [...this.state.currentWindows, newWindow]})
    }

    handleClose = key => this.setState({currentWindows: this.state.currentWindows.filter(win => win.key !== key)})

    render(){

        return(
            <div className="app">
                <BackgroundVideo/>
                <MainAction onOpenWindow={this.handleOpenWindow}/>
                <Windows windows={this.state.currentWindows} onClose={this.handleClose}/>
            </div>
        )
    }
}
