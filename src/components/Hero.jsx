import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min'
import '../styles/hero.css';


export default function Hero({title, description, imageSrc}) {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 1000.00,
                minWidth: 1000.00,
                scale: 1.00,
                scaleMobile: 1.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);

    return (
        <div className="overflow-hidden flex justify-between hero-container" ref={myRef}>
            <div className="flex flex-col justify-center items-center md:items-start text-center px-4 py-8 md:text-left md:ml-14 md:py-0 md:px-0">
                <h1 className="font-hero text-6xl">{title}</h1>
                <p className="bg-black rounded-xl pl-2 py-1">March 1 - 2, 2022 <span className="bg-csSecondary rounded-xl px-2 py-1">9AM</span></p>
                <p className="md:w-2/6">{description}</p>
            </div>
            <div className="hidden md:block">
                <img className="hero-img" src={imageSrc} alt="feature image" />
            </div>
        </div>
    );
}