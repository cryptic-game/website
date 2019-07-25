import React from 'react'
import BackgroundVideo from "./components/BackgroundVideo.js"
import MainAction from "./components/MainAction/MainAction.js"
import Window from "./components/Window/Window.js"

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
                {this.state.currentWindows.map(win => (
                    <Window
                        href={win.href}
                        onClose={this.handleClose.bind(this, win.key)}
                        key={win.key}
                    />
                ))}
            </div>
        )
    }
}
