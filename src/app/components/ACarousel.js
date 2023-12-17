"use client"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const ACarousel = () => {
    return (
        <>
            <div className="annoucment-slider">
                <Carousel infiniteLoop={true} autoPlay={true} showArrows={false}
                    interval={5000} showStatus={false} showIndicators={true} showThumbs={false}>
                    <div className='slide-content'>
                        <p>Dont forget our UX Friday event every second Friday at 14-15</p>
                        <p className="text-end mb-4" >Sept 12, 2020</p>
                    </div>
                    <div className='slide-content'>
                        <p>Dont forget our UX Friday event every second Friday at 14-15</p>
                        <p className="text-end mb-4" >Sept 12, 2020</p>
                    </div>
                    <div className='slide-content'>
                        <p>Dont forget our UX Friday event every second Friday at 14-15</p>
                        <p className="text-end mb-4" >Sept 12, 2020</p>
                    </div>
                    <div className='slide-content'>
                        <p>Dont forget our UX Friday event every second Friday at 14-15</p>
                        <p className="text-end mb-4" >Sept 12, 2020</p>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default ACarousel
