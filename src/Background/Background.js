import React from "react";
import "../styles/background.css";
import video from "../assets/mixkit-stars-in-space-background-1610-hd-ready.mp4";
import fallbackImage from "../assets/fallback-image.png";


const Background = () => {
    return (
        <>
            <div classname = "shadow-overlay"></div>
            <video 
            playInline 
            autoPlay 
            muted 
            loop 
            preload = "auto" 
            id = "bg" 
            poster = {fallbackImage}
            >
            <source src = {video} type = "video/mp4"/>
            </video>
        </>
    );
};


export default Background;