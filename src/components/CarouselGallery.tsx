import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselComponent} from 'react-responsive-carousel';

export default function Carousel({imagesMobile, imageDesktop, slideTitle, bgColor}) {
    return (
        <>
            {/* @ts-ignore */}
            <CarouselComponent className={'hidden md:flex h-fit py-10 ' + bgColor}
                showThumbs={false}
                autoPlay
            >
                {
                    imageDesktop.map((imageDesktop) => (
                        <div key={imageDesktop.backgroundImageFirst + imageDesktop.backgroundImageSecond + imageDesktop.backgroundImageThird}>
                            <div  className="flex justify-center">
                                <div className="flex flex-wrap justify-center md:justify-start font-display font-black text-4xl text-[#9147FF]">{slideTitle}</div>
                            </div>

                            <div className="relative flex space-x-10 px-20 my-20">
                                <div className="flex-auto">
                                    <img className="brightness-75" src={imageDesktop.backgroundImageFirst} />
                                </div>
                                <div className="flex-auto -my-16 ">
                                    <img className="brightness-75" src={imageDesktop.backgroundImageSecond} />
                                </div>
                                <div className="flex-auto">
                                    <img className="brightness-75" src={imageDesktop.backgroundImageThird} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </CarouselComponent>

            {/* @ts-ignore */}
            <CarouselComponent className={'flex md:hidden h-fit py-10 ' + bgColor}
                showThumbs={false}
                autoPlay
            >
                {
                    imagesMobile.map((imagesMobile) => (
                        <div key={imagesMobile.backgroundImage}>
                            <div  className="flex justify-center my-5">
                                <div className="flex flex-wrap justify-center md:justify-start font-display font-black text-4xl text-[#9147FF]">{slideTitle}</div>
                            </div>
                            <img className="brightness-75" src={imagesMobile.backgroundImage} />
                        </div>
                    ))
                }
            </CarouselComponent>
        </>
    );
}
