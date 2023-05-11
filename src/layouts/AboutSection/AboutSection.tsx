import './AboutSection.scss';


const AboutSection = () => {

    return (
        <div className='about-section container'>
            <div className="section__content">
                <h2 className="section__title">Find Your Course That Makes Bright Future</h2>
                <p className="section__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida.  malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi</p>
                <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. </p>
                <a href="#" className="section__link">Learn More</a>
            </div>
            <video src="" className='section__video' poster='./images/poster.jpg' controls></video>
        </div>
    )
}

export default AboutSection;