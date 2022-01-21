import React, { useState, useEffect } from 'react';

export default function ButtonTheme() {
    const darkModeIcon = '/images/dark-mode.png';
    const lightModeIcon = '/images/light-mode.png';

    const [icon, setIcon] = useState(darkModeIcon);

    const toggleTheme = () => {
        if (localStorage.theme === 'dark') localStorage.theme = 'light';
        else if (localStorage.theme === 'light') localStorage.theme = 'dark';
        processTheme();
    };

    const processTheme = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setIcon(darkModeIcon);
        } else {
            document.documentElement.classList.remove('dark')
            setIcon(lightModeIcon);
        }
    }

    useEffect(() => {
        processTheme();
	}, []);

    return (
        <>
            <button className="w-5 h-5" onClick={toggleTheme}>
                <img src={icon} alt="toggle theme" />
            </button>
        </>
    );
}