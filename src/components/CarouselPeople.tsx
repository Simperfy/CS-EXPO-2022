import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselComponent } from 'react-responsive-carousel';


export default function CarouselPeople({images}) {
    return (
        <div className="flex gap-24 h-fit py-24 bg-csPrimaryDark">
            <div className="w-full md:w-2/4 flex flex-col justify-center items-center md:items-end">
                <div className="w-full block md:hidden">
                    <h1 class="text-4xl font-display font-bold text-csPrimary text-center">Speakers</h1>
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
                                <div className="absolute bg-csBGSpeakers py-4 md:left-0 bottom-[4rem] h-fit flex flex-col gap-2 justify-center items-center w-full">
                                    <h1 className="text-4xl font-bold italic text-csPrimary">{image.title}</h1>
                                    <p className="text-2xl text-white">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </CarouselComponent>
                </div>
            </div>
            <div className="hidden md:flex md:w-2/4 flex-col items-start justify-center">
                <h1 class="text-4xl font-display font-bold text-csPrimary text-center w-2/3">Speakers</h1>
                <div className="p-8 rounded border-2 border-csSecondary w-2/3">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse quis neque vel augue dictum scelerisque ut nec sapien.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse quis neque vel augue dictum scelerisque ut nec sapien.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse quis neque vel augue dictum scelerisque ut nec sapien.
                    </p>
                </div>
            </div>
        </div>
    );
}