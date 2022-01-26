import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselComponent} from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive'



export default function Carousel({imagesMobile, imageDesktop, slideTitle, bgColor}) {

        const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })

    return (
        // @ts-ignore
        
            <CarouselComponent className={'flex h-fit py-10 ' + bgColor}
                showThumbs={false}
                autoPlay
            >

                {isBigScreen ? (

                        imageDesktop.map((imageDesktop) => (
                            <div key={imageDesktop}>

                                <div  class="flex justify-center my-5">
                                    <div class="flex flex-wrap justify-center md:justify-start font-display font-black text-4xl text-[#9147FF]">{slideTitle}</div>
                                </div>

                                <div className="inline-grid grid-cols-3 gap-x-15 py-10">
                                        <img className="h-[400px] mr-5 brightness-75" src={imageDesktop.backgroundImageFirst} />
                                            <div className="relative ml-5">
                                                <img className="absolute left-0 bottom-10 h-[400px] brightness-75" src={imageDesktop.backgroundImageSecond} />
                                            </div>
                                        <img className="h-[400px] ml-5 brightness-75" src={imageDesktop.backgroundImageThird} />
                                </div>
                            </div>
                        ))
                ): 
                (imagesMobile.map((imagesMobile) => (
                    <div key={imagesMobile}>
                                <div  class="flex justify-center my-5">
                                    <div class="flex flex-wrap justify-center md:justify-start font-display font-black text-4xl text-[#9147FF]">{slideTitle}</div>
                                </div>
                                    <img className="carousel-img brightness-75" src={imagesMobile.backgroundImage} />
                        </div>

                ))) }


            </CarouselComponent>


            
    );
}
