import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min'
import '../styles/heroContainer.css';

export default function HeroContainer({children}) {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: screen.height,
                minWidth: screen.height,
                scale: 1.0,
                scaleMobile: 1.0,
                spacing: screen.width <= 1366.0 ? 20.0 : 15.0,
                color: "#742843",
                backgroundColor: "#1C1626"
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);

    return (
        <div className="flex flex-col justify-between hero-container h-fit overflow-hidden" ref={myRef}>
            {children}
        </div>
    );
}