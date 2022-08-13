import { useState, useEffect } from "react";

function getViewPort() {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height, 'vmin': Math.min(width,height), 'vmax': Math.max(width,height)};
}

export default function ViewPort(){
    const [VPD, setVPD] = useState(getViewPort());
    useEffect(() => {
        function handleResize() {
            setVPD(getViewPort());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);
    return VPD;
}