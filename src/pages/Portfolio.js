import React from 'react';
import ProjectList from '../Components/portfolio/ProjectList';
import Navigation from '../Components/Navigation';
const Portfolio = () => {
    return (
        <div className='portfolio '>
             <Navigation/>
             <ProjectList/>
        </div>
    );
};

export default Portfolio;