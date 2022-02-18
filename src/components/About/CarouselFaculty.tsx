import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselComponent } from 'react-responsive-carousel';


// bgColor should be valid tailwind bg color class
// reverse is boolean determining the orientation of the carousel
export default function CarouselFaculty({ images, title, bgColor }) {

    return (
        <>
            {/* @ts-ignore */}
            <CarouselComponent
                showThumbs={false}
            >
                {images.map((image) => (
                    <div className={"flex gap-24 h-fit py-24 " + bgColor}>
                        <div className="w-full md:w-2/4 flex flex-col justify-center items-center md:items-end">
                            <div className="w-full block md:hidden">
                                <h1 className="text-4xl font-display font-bold text-csPrimary text-center">{title}</h1>
                            </div>
                            <div className="bg-gray-500 w-full max-w-sm md:w-96">
                                <div key={image.title} className="w-auto relative">
                                    <img className="h-auto md:h-[600px] brightness-75" src={image.backgroundImage} />
                                    <div className="absolute bg-csBGSpeakers py-4 md:left-0 h-fit bottom-[2rem] block gap-2 justify-center items-center w-full">
                                        <p type="button" className="text-4xl font-bold italic text-csPrimary">{image.title}</p>
                                        <p className="text-2xl text-white">{image.shortDescription}</p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="hidden md:flex md:w-5/6 flex-col items-start justify-center">
                            <h1 className="text-4xl font-display font-bold text-csPrimary text-center w-5/6">{title}</h1>
                            <div className="p-8 rounded border-2 border-csSecondary w-2/3">
                                <p className="text-white">
                                    {image.longDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </CarouselComponent>
        </>
    );
}