import React from "react";
import { useEffect, useState } from "react";
import './Animation.css'


function AnimatedQuote({text}) {
    const[top, setTop] = useState(0);
    const[left, setLeft] = useState(0);
    const[isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
            setTop(Math.floor(Math.random() * window.innerHeight));
            setLeft(Math.floor(Math.random() * window.innerWidth));
        }, Math.random() * 5000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <div className={`animated-text ${isVisible ? 'fadeIn' : ''}`} style={{ top: `${top}px`, left: `${left}px` }}>
            {text}
        </div>
    );
}

export default AnimatedQuote;