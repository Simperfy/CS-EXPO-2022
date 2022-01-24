import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselComponent} from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive'



export default function Carousel({images, img}) {

        const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })

    return (
        // @ts-ignore
        
        
            <CarouselComponent
                showThumbs={false}
                autoPlay
            >

                {isBigScreen ? (
                    img.map((img) => (
                    <div key={img}>

                            <div class="inline-grid grid-cols-3 gap-4">
                                    <img className="carousel-img brightness-75" src={img.backgroundImageF} />
                                    <img className="carousel-img brightness-75" src={img.backgroundImageS} />
                                    <img className="carousel-img brightness-75" src={img.backgroundImageT} />
                            </div>
                        </div>

                ))) : 
                (images.map((image) => (
                    <div key={image}>
                            <img className="carousel-img brightness-75" src={image.backgroundImage} />
                        </div>

                ))) }


            </CarouselComponent>


            

            
    );
}
