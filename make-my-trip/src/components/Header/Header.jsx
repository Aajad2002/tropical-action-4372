import React from 'react';
import './Header.css';
// import { relativeTimeRounding } from 'moment';

function Header() {
    const logo = "https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png";
    // const mybiz = window.location.origin + '/mybiz12345.png';
    // const travellug = window.location.origin + '/travellug123.png';

    return (
        <div>
            <div className='header-main'>
                <div>
                    <img className='header-img-1' src={logo} alt="yourpic" width='110' height='38' />
                </div>
                <div>
                    <span>&nbsp;</span>
                </div>
            </div>
        </div>
    )
}

export default Header
