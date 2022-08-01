import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/fabien.jpg"alt="profil-pic"/>
                    <h3>Fabien Randrianantenaina</h3>
                </div>
            </div>
            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competence" activeClassName="navActive">
                            <i className='fas fa-mountain'></i>
                            <span>competence</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className='fas fa-images'></i>
                            <span>portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className='fas fa-address-book'></i>
                            <span>contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
                <div className='socialNetwork'>
                    <ul>
                        <li>
                            <a href='https://www.google.com' target="_blank" rel="noopener"><i className='fab fa-linkedin'></i></a>
                        </li>
                        <li>
                            <a href='https://www.google.com' target="_blank" rel="noopener"><i className='fab fa-github'></i></a>
                        </li>
                        <li>
                            <a href='https://www.google.com' target="_blank" rel="noopener"><i className='fab fa-twitter'></i></a>
                        </li>
                        <li>
                            <a href='https://www.google.com' target="_blank" rel="noopener"><i className='fab fa-codepen'></i></a>
                        </li>
                    </ul>
                    <div className='signature'>
                        <p>from fabien-2022</p>
                    </div>
                </div>
        </div>
    );
};

export default Navigation;