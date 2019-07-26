import React from 'react'
import LandscapeMode from "./components/LandscapeMode.js"
import PortraitMode from "./components/PortraitMode.js"

export default () => {
    if(window.innerHeight <= window.innerWidth) return <LandscapeMode/>
    else return <PortraitMode/>
}
