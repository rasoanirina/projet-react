import React from 'react';
import Navigation from '../Components/Navigation';
//import { copyToClipboard } from "react-copy-to-clipboard";

const contacts = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <div className='ContactContent'>
            <div className='header'></div>
            <div className='contactBox'>
               <h1>Contactez-moi</h1> 
               <ul>
                <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>Bordeaux</span>
                </li>
                <li>
                    <i className='fas fa-mobile-alt'></i>
                    <copyToClipboard text="0344342341">
                    <span className='clickInput'
                     onClick={() =>{
                    alert("telehone copie !");}}
                    >
                        0344342341

                        </span>
                    </copyToClipboard>
                    
                </li>

                <li>
                    <i className='far fa-envelope'></i>
                    <copyToClipboard text="monmail@coucou.fr">
                    <span className='clickInput'
                     onClick={() =>{
                    alert("E-mailcopie !");}}
                    >
                      frandri146@gmail.com

                        </span>
                    </copyToClipboard>
                    
                </li>
               </ul>
            </div>
            <div className='socialNetwork'>
                <ul>
                    <a href='http://www.google.com' target="_blank"
                    rel='noopener noreferrer'>
                        <h4>LinkendIn</h4>
                        <i className='fab fa-linkendin'></i>

                    </a> <a href='http://www.google.com' target="_blank"
                    rel='noopener noreferrer'>
                        <h4>LinkendIn</h4>
                        <i className='fab fa-github'></i>

                    </a>
                    <a href='http://www.google.com' target="_blank"
                    rel='noopener noreferrer'>
                        <h4>LinkendIn</h4>
                        <i className='fab fa-twitter'></i>

                    </a>
                    <a href='http://www.google.com' target="_blank"
                    rel='noopener noreferrer'>
                        <h4>LinkendIn</h4>
                        <i className='fab fa-codepen'></i>

                    </a>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default contacts;

