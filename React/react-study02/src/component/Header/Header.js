import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



function Header(props) {
    const location = window.location;
    
    return (
        location.pathname !=='/Survey' &&
            <div className='nav'>
            <ul>
            <Link to="/"><li><img src="img/LOGO.png" alt="로고"/></li></Link>
                <div className='nav-middle'>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><li>홈</li></Link>
                    <Link to='/ToBoard'  style={{textDecoration: 'none', color: 'black'}}><li>게시판</li></Link>
                    <Link to='/ToSurvey'  style={{textDecoration: 'none', color: 'black'}}><li>설문조사</li></Link>
                    <Link to='/info'  style={{textDecoration: 'none', color: 'black'}}><li>정보</li></Link>
                </div>
                <li><FontAwesomeIcon icon={faBars} className="menuBar" /></li>
            </ul>
            </div>
            
    );
    
}

export default Header;