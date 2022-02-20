import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselComponent } from 'react-responsive-carousel';

// bgColor should be valid tailwind bg color class
// reverse is boolean determining the orientation of the carousel
export default function CarouselPeople({images, title, description, bgColor, reverse = false}) {
    return (
        <div className={`flex gap-8 lg:gap-24 h-fit py-24 ${bgColor} ${reverse && 'flex-row-reverse'}`}>
            <div className={`w-full md:w-2/4 flex flex-col justify-center items-center ${reverse ? 'md:items-start' : 'md:items-end'}`}>
                <div className="w-full block md:hidden">
                    <h1 className="text-4xl font-display font-bold text-csPrimary text-center">{ title }</h1>
                </div>
                <div className="bg-gray-500 w-full max-w-sm md:w-96">
                    {/* @ts-ignore */}
                    <CarouselComponent
                        showThumbs={false}
                        autoPlay
                    >
                        {images.map((image) => (
                            <div key={image.title}>
                                <img className="h-[600px] brightness-75" src={image.backgroundImage} />
                                <div className="absolute md:text-left bg-csBGSpeakers py-4 md:left-0 bottom-[3rem] h-fit flex flex-col justify-center items-center md:items-start w-full">
                                    <h1 className="text-2xl pl-3 font-bold italic text-csPrimary">{image.title}</h1>
                                    <p className="text-xl pl-3 text-white">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </CarouselComponent>
                </div>
            </div>
            <div className={`hidden md:flex md:w-2/4 flex-col justify-center items-center gap-2 ${reverse ? 'md:items-end' : 'lg:items-start'}`}>
                <h1 className="text-4xl font-display font-bold text-csPrimary text-center w-2/3">{ title }</h1>
                <div className="p-8 rounded border-2 border-csSecondary w-11/12 lg:w-2/3">
                    <p className="text-white">
                        { description }
                    </p>
                </div>
            </div>
        </div>
    )

}