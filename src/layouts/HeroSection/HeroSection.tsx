import './HeroSection.scss';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
};


const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className="container">
                <Slider {...settings}>
                    <a className="item" href='#'>
                        <img src="./images/hero.jpg" alt="hero" />
                        <div className="text">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex id molestiae?</p>
                        </div>
                    </a>
                    <a className="item" href='#'>
                        <img src="./images/hero.jpg" alt="hero" />
                        <div className="text">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex id molestiae?</p>
                        </div>
                    </a>
                    <a className="item" href='#'>
                        <img src="./images/hero.jpg" alt="hero" />
                        <div className="text">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex id molestiae?</p>
                        </div>
                    </a>
                    <a className="item" href='#'>
                        <img src="./images/hero.jpg" alt="hero" />
                        <div className="text">
                            <h4>Lorem ipsum dolor sit.</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex id molestiae?</p>
                        </div>
                    </a>
                </Slider>
            </div>

        </div>
    )
}

export default HeroSection;