// React card slider + npm i react-slick

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ artworks }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '60px',
        // adaptiveHeight: true,
        slidesToShow: 3,        // changeable
        slidesToScroll: 1       // changeable
    };

    return (
        <Slider {...settings}>
            {artworks.map(artwork => (
                <div key={artwork.id}>
                    <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`} alt={artwork.title} />
                </div>
            ))}
        </Slider>
    );
}

export default Carousel;
