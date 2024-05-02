/* eslint-disable */

import {useState,useEffect} from "react";

interface MousePosition {
    x: number;
    y: number;
}

export default function useMousePosition(): MousePositon{
    const [mousePosition,setMousePosition] = useState<MousePosition>({x:0,y:0});
    useEffect(()=>{
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({x:event.clientX,y:event.clientY});
        };

        window.addEventlistener("mousemove",handleMouseMove);

        return()=>{
            window.removeEventlistener("mousemove",handleMouseMove);
        };
    },[]);

    return mousePositon;
}
