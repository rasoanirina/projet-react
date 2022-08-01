import React from 'react';
import Navigation from '../Components/Navigation';
const Home = () => {
    return (
        <div className='Home'>
            <Navigation/>
           <div className='HomeContent'>
            <div className='content'>
                <h1>Fabien Randrianantenaina</h1>
                <h2>Developpeur Front-end</h2>
                <div className='pdf'>
            <a href="./media/CV.pdf" target="blank">Telecharger CV</a>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Home;