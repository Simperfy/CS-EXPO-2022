import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min'
import '../styles/hero.css';


export default function Hero({title, description, imageSrc, isDateVisible = false}) {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                THREE: THREE,
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

    const colorizeTitle = (title) => {
        return title.split(' ').map((word, index) => {
            let style = 'text-csSecondary';
            if ((index+1) % 2 === 0) style = 'text-csPrimary';
            if ((index+1) % 3 === 0) style = 'text-white';

            return (<span key={word} className={style}>{word}</span>);
        });
    };

    return (
        <div className="overflow-hidden flex justify-between hero-container" ref={myRef}>
            <div className="flex flex-col justify-center items-center md:items-start text-center gap-1 px-4 py-8 md:text-left md:ml-14 md:py-0 md:px-0">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 font-display font-black text-6xl">{colorizeTitle(title)}</div>
                {
                    isDateVisible &&
                    <p className="bg-black text-white font-display font-bold rounded-xl text-lg pl-2 py-1">
                        March 1 - 2, 2022
                        <span className="bg-csSecondary text-csPrimary rounded-xl ml-2 px-2 py-1">
                            9AM
                        </span>
                    </p>
                }
                <p className="text-2xl md:w-3/6 text-white">{description}</p>
            </div>
            <div className="hidden md:block">
                <img className="hero-img" src={imageSrc} alt="feature image" />
            </div>
        </div>
    );
}