import { useState } from 'react';
import HeaderBottom from '../HeaderBottom';
import './HeaderMiddle.scss';


const HeaderMiddle = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="header-middle">
            <button className="header-bottom-btn" onClick={() => setOpenMenu(!openMenu)}>
                <span className="icon-grid"></span>
            </button>
            <HeaderBottom open={openMenu} />
            
            <ul className="menu">
                <div>
                    <li className='first-item'>
                        <a href="#">
                            <span>Abiturientlarga</span>
                            <ul className="submenu">
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                            </ul>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span>Talabalar uchun</span>
                            <ul className="submenu">
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                            </ul>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span>Doktorantlarga</span>
                            <ul className="submenu">
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                            </ul>
                        </a>
                    </li>
                </div>
                <div>
                    <li>
                        <a href="#">
                            <span>Xodimlar uchun</span>
                            <ul className="submenu">
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                            </ul>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Xodimlar uchun</span>
                            <ul className="submenu">
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                            </ul>
                        </a>
                    </li>
                    <li className='last-item'>
                        <a href="#">
                            <span>Hamkorlik</span>
                            <ul className="submenu">
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                            </ul>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default HeaderMiddle;