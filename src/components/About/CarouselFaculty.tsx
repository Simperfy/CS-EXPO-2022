import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import '../../styles/carouselFaculty.css';


// bgColor should be valid tailwind bg color class
// reverse is boolean determining the orientation of the carousel
export default function CarouselFaculty({ images, title, bgColor, reverse = false }) {
    return (
        <>
            {/* @ts-ignore */}
            <CarouselComponent
                showThumbs={false}
                showStatus={false}
            >
                {images.map((image) => (
                    <div key={image.title} className={`flex gap-24 h-fit py-24 ${bgColor} ${reverse && 'flex-row-reverse'}`}>
                        <div className={`w-full md:w-2/4 flex flex-col justify-center items-center ${reverse ? 'md:items-start' : 'md:items-end'}`}>
                            <div className="w-full block md:hidden">
                                <h1 className="text-4xl font-display font-bold text-csPrimary text-center">{title}</h1>
                            </div>
                            <div className="w-full max-w-sm md:w-96">
                                <div className="w-auto md:h-[600px] flex flex-col justify-center relative">
                                    <img className="h-auto brightness-75" src={image.backgroundImage} />
                                    <div className="absolute md:text-left bg-csBGSpeakers py-4 md:left-0 bottom-[3rem] h-fit flex flex-col justify-center items-center md:items-start w-full">
                                        <h1 className="text-2xl pl-3 font-bold italic text-csPrimary">{image.title}</h1>
                                        <p className="font-bold pl-3 text-white">{image.shortDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`hidden md:flex md:w-5/6 flex-col justify-center items-center gap-2 ${reverse ? 'md:items-end' : 'md:items-start'}`}>
                            <h1 className="text-4xl font-display font-bold text-csPrimary text-center w-11/12 2xl:w-9/12">{title}</h1>
                            <div className="p-8 rounded border-2 border-csSecondary w-11/12 2xl:w-9/12">
                                <p className="text-white text-justify">
                                    {image.longDescription}
                                </p>
                                <blockquote className={`${!image.message && "hidden"} mt-4 text-justify`}>
                                    {image.message}
                                </blockquote>
                            </div>
                        </div>
                    </div>
                ))}
            </CarouselComponent>
        </>
    );
}