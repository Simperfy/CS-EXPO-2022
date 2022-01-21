import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselComponent } from 'react-responsive-carousel';

export default function Carousel({images}) {
    return (
        <CarouselComponent
            showThumbs={false}
            autoPlay
        >
                {images.map((image) => (
                    <div key={image.title}>
                        <img className="carousel-img brightness-75" src={image.backgroundImage} />
                        <div className="absolute inset-x-1/4 top-1/3 h-fit flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-4xl font-display font-bold text-csPrimary">{image.title}</h1>
                            <p className="text-2xl text-white">{image.description}</p>
                            <a className="border-2 p-2 border-csSecondary text-csSecondary font-bold font-2xl w-fit" href={image.link}>Read more</a>
                        </div>
                    </div>
                ))}
        </CarouselComponent>
    );
}
