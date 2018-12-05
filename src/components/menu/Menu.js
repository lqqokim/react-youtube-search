import React from 'react';

const Menu = ({ isOpenMenu }) => {
    const menuBarClass = isOpenMenu ? '' : 'close';


    return (
        <div className={`menuBar ${menuBarClass}`}>
            <ul className="menu-list">
                <li>
                    <i class="fa fa-home"></i>&nbsp;
                        홈
                </li>
                <li>
                    <i class="fa fa-heart"></i>&nbsp;
                    좋아요 표시한 동영상
                </li>
            </ul>
        </div>
    )
}

export default Menu;