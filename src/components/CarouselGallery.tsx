import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselComponent} from 'react-responsive-carousel';
import '../styles/gallery.css';


export default function Carousel({images}) {

    return (
        // @ts-ignore
        
        
            <CarouselComponent
                showThumbs={false}
                autoPlay
            >
                {images.map((image) => (
                    <div key={image.title}>

                        <div class="hidden md:flex">
                            <div class="inline-grid grid-cols-3 gap-4">
                                    <img className="carousel-img brightness-75" src={image.backgroundImageF} />
                                    <img className="carousel-img brightness-75" src={image.backgroundImageS} />
                                    <img className="carousel-img brightness-75" src={image.backgroundImageT} />
                            </div>
                        </div>

                        
                        <div class="md:hidden">
                            <img className="carousel-img brightness-75" src={image.backgroundImage} />
                        </div>

                    </div>
                ))}
            </CarouselComponent>


            

            
    );
}
