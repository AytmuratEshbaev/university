import { useState } from 'react';
import MobileMenu from '../MobileMenu';
import './HeaderTop.scss';


const HeaderTop = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="header-top">
            <div className="container">
                <button className='header__btn' onClick={() => setOpenMenu(!openMenu)}><span className="icon-menu"></span></button>
                <MobileMenu open={openMenu} />
                <div className="header__contact">
                    <ul className="social__links">
                        <li>
                            <a href='#'><span className="icon-twitter"></span></a>
                        </li>
                        <li>
                            <a href="#"><span className="icon-telegram"></span></a>
                        </li>
                        <li>
                            <a href='#'><span className="icon-youtube-play"></span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className="icon-instagram"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span className="icon-facebook"></span></a>
                        </li>
                    </ul>
                    <a href="tel: +998933623621" className='phone__number'>+998 99 123 45 67</a>
                </div>

                <div className="wrapper">
                    <div className="header__search">
                        <input type="search" placeholder="Search..." />
                        <div className="search"></div>
                    </div>

                    <div className="header__settings">
                        <select name="lang" id="lang">
                            <option value="0">Qaraqalpaqsha</option>
                            <option value="1">O'zbekcha</option>
                            <option value="2">English</option>
                            <option value="3">Русский</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop