import { useState,useEffect } from 'react';
import {Outlet} from 'react-router-dom';
import animatedletters from '../components/animatedletters'
// import CV from "../Components/dox/Charmaine Mwandiringa - Resume.pdf";

const About = () => {

    return(
        <>
            <div className="w-hull h-full  bg-slate-300">
                <div className="page-bg">
                    <h1 className='text-green-900'>About</h1>
                </div>
            </div>
        </>
  
    );
}

export default About; 