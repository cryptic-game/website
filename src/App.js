import React from 'react'
import BackgroundVideo from "./components/BackgroundVideo.js"
import MainAction from "./components/MainAction/MainAction.js"
import Window from "./components/Window/Window.js"

const Windows = ({windows, onClose, onFocus}) => {
    return windows.map(win => (
        <Window
            href={win.href}
            onClose={onClose.bind(this, win.key)}
            onFocus={onFocus.bind(this, win.key)}
            key={win.key}
            zIndex={win.zIndex}
        />
    ))
}

export default class App extends React.Component{
    state = {currentWindows: []}
    highestZIndex = -1

    handleOpenWindow = href => {
        const key = Date.now()
        const newWindow = {href,key,zIndex: ++this.highestZIndex}
        this.setState({currentWindows: [...this.state.currentWindows, newWindow]})
    }

    handleClose = key => this.setState({currentWindows: this.state.currentWindows.filter(win => win.key !== key)})

    handleFocus = key => this.setState({currentWindows: this.state.currentWindows.map(win => ({...win, zIndex: win.key === key && win.zIndex < this.highestZIndex ? ++this.highestZIndex : win.zIndex}))})

    render(){
        return(
            <div className="app">
                <BackgroundVideo/>
                <MainAction onOpenWindow={this.handleOpenWindow}/>
                <Windows windows={this.state.currentWindows} onClose={this.handleClose} onFocus={this.handleFocus}/>
            </div>
        )
    }
}
