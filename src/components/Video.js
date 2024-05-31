import React, {useRef, useEffect} from "react";
import "../App.css";
import cover from "./cover.mp4";

export default function Video() {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline>
            <source src={cover} type="video/mp4"/>
        </video>
    );
}