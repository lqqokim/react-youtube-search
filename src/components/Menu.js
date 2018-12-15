import React from 'react';

import { Link } from 'react-router-dom';
const Menu = ({ isOpenMenu }) => {
    const menuBarClass = isOpenMenu ? '' : 'close';

    return (
        <div className={`menuBar ${menuBarClass}`}>
            <ul className="menu-list">
                <Link to="/" className="link">
                    <li>
                        <i className="fa fa-home"></i>
                        <span>홈</span>
                    </li>
                </Link>
                <Link to="/like" className="link">
                    <li>
                        <i className="fa fa-heart"></i>
                        <span>좋아요 표시한 동영상</span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Menu;