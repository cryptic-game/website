import React from "react"
import videoSrc from "../assets/video/background.mp4"

const CustomVideo = ({onLoad, getRef}) => (
    <video muted loop onLoadedData={onLoad} ref={getRef}>
        <source src={videoSrc} type="video/mp4"/>
    </video>
)

export default class BackgroundVideo extends React.Component{
    loaded = 0
    videos = []

    positionVideo = () => {
        const stretchedVideo = this.videos[1]
        stretchedVideo.style.left = stretchedVideo.offsetWidth / 2 * -1 + window.innerWidth/2 + "px"
    }

    handleLoad = () => {
        if(++this.loaded === 2){
            this.videos.forEach(video => video.play())
            this.positionVideo()
            window.addEventListener("resize", this.positionVideo)
        }
    }

    render(){
        return(
            <div className="background-video-wrapper">
                <CustomVideo onLoad={this.handleLoad} getRef={ref => this.videos.push(ref)}/>
                <CustomVideo onLoad={this.handleLoad} getRef={ref => this.videos.push(ref)}/>
            </div>
        )
    }
}
