import React from 'react';
import Navigation from '../Components/Navigation';
import Experience from '../Components/Knowledges/Experience';
import OtherSkills from '../Components/Knowledges/OtherSkills';
import Hobbies from '../Components/Knowledges/Hobbies';
import Languages from '../Components/Knowledges/Languages'
const Knowledges = () => {
    return (
        <div className='knowledges'>
             <Navigation/>
           <div className='knowledgesContent'>
             <Languages/>
            <Experience/>
           <OtherSkills/>
             <Hobbies/>
           </div>
        </div>
    );
};

export default Knowledges;