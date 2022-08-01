import React from 'react';
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='NotFound'>
          <div className='NotFoundcontent'>
        <h3>desole cette page n'existe pas</h3>
        <NavLink exact to="/">
<i className='fas fa-Home'></i>
<span> Accueil</span>
        </NavLink>
            </div>   
        </div>
    );
};

export default NotFound;