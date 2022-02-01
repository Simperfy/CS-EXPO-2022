import React from 'react';

export default function Hero({title, description, imageSrc, dateObj, inverse = false}) {

    const colorizeTitle = (title) => {
        return title.split(' ').map((word, index) => {
            let style = 'text-csSecondary';
            if ((index+1) % 2 === 0) style = 'text-csPrimary';
            if ((index+1) % 3 === 0) style = 'text-white';

            return (<span key={word} className={style}>{word}</span>);
        });
    };

    return (
        <>
            {
                !inverse &&
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center items-center md:items-start text-center gap-1 px-4 py-8 md:text-left md:ml-14 md:py-0 md:px-0">
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 font-display font-black text-6xl">{colorizeTitle(title)}</div>
                        {
                            dateObj &&
                            <p className="bg-black text-white font-display font-bold rounded-xl text-lg pl-2 py-1">
                                {dateObj.month}
                                <span className="bg-csSecondary text-csPrimary rounded-xl ml-2 px-2 py-1">
                                    {dateObj.time}
                                </span>
                            </p>
                        }
                        <p className="text-2xl md:w-3/6 text-white">{description}</p>
                    </div>
                    <div className="hidden md:block">
                        <img className="hero-img" src={imageSrc} alt="feature image" />
                    </div>
                </div>
            }

            {
                inverse &&
                <div className="flex justify-between">
                    <div className="hidden md:block">
                        <img className="hero-img-inverse" src={imageSrc} alt="feature image" />
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start text-center gap-1 px-4 py-8 md:text-left md:ml-40 md:py-0 md:px-0">
                        <div className="flex flex-wrap justify-center md:justify-center gap-2 font-display font-black text-6xl">{colorizeTitle(title)}</div>
                        {
                            dateObj &&
                            <p className="bg-black text-white font-display font-bold rounded-xl text-lg pl-2 py-1">
                                {dateObj.month}
                                <span className="bg-csSecondary text-csPrimary rounded-xl ml-2 px-2 py-1">
                                    {dateObj.time}
                                </span>
                            </p>
                        }
                        <p className="text-2xl md:w-3/6 text-white">{description}</p>
                    </div>
                </div>
            }
        </>
    );
}