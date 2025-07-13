import { useState,useEffect } from 'react';
import {Outlet} from 'react-router-dom';
import AnimatedLetters from '../Components/AnimatedLetters';
import CV from "../Components/dox/Charmaine Mwandiringa - Resume.pdf";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['  ','C','h','a','r','m','a','i','n','e']
    const jobArray = ['W','e','b','    ','D','e','v','e','l','o','p','e','r']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, [letterClass]);
 
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Web Developer","Front-end Developer","Web Designer","Graphic Designer",];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () =>{ clearInterval(ticker)};
    }, [text] )

    const tick =  () => {
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i];
        let updatedText =isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
        
    return(
        <>
            <div className="page hidden xl:block">
                <div className="page-bg flex float-end xl:w-1/2 xl:m-0 xl:p-0">
                    <img className='home_img w-full max-h-[90vh] object-contain' src= 'images/bg-header 1.png'  alt="homeimg"/>
                </div>
               
                <span className='top-tags' id='tags'>
                    <span className='bottom-tag-html'>&lt;html&gt;</span>
                    <br />
                    <span className='top-tag-html'>&lt;body&gt;</span>
                </span>

                <Outlet />

                <span className='bottom-tags' id='tags'>
                    <span className='top-tag-html'>&lt;body&gt;</span>
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>  
            
            </div>
        <div className='main-section w-full xl:w-1/2' id='hero'>
       <div className="container flex flex-col items-center justify-center xl:h-screen xl:justify-center  xl:items-end"> 
            <div className="hero-txt space-y-9  xl:text-start ">
                <h1>

                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>

                <br/>
                    <span className={`${letterClass} _13`}>l'</span>
                    <span className={`${letterClass} _14`}>m</span>
                   
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray} 
                    idx={15}/>
                      
                    <br/> 
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray} 
                    idx={22}/>
                 
                </h1>
                <h3 className='text-xl leading-[1.9] text-[#FFC448] '>&lt; {/* Front-end Developer */} {text} &gt;</h3>
                <div className='button pb-7'>
                    <a  href={CV} 
                        download="Charmaine Mwandiringa - Resume.pdf"
                        className='button-btn'
                    >
                        DOWNLOAD CV
                    </a> 
                </div>

            
            </div> 
       </div> 
       </div>
        
        </>
  
    );
}

export default Home; 