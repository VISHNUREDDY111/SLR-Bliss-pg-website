import './Home.css';
import img1 from './assets/img1.png';
import img2 from '../components/assets/img2.png';
import img3 from '../components/assets/img3.png';
import gym from '../components/assets/gym.png';
import gym1 from '../components/assets/gym1.png';
import Slideshow from './slideshow';
import Contact from './contact';
import { motion } from 'framer-motion';

import { fadeIn } from './variants';
import AboutUs from './About';
import Services from './services';


function Home(){
    return(
        <div className='home'>
            <div style={{height:'4rem'}}></div>
            <marquee class="marq" bgcolor="black" 
                 direction="left" loop="">
           
                <h3>** Rooms Available **</h3>
            
        </marquee>
            <h1 className='Welcome'>Welcome to <span >SLR Bliss Gents PG <i class="fa-regular fa-building"></i></span></h1>
            <div className='carosel'>

                  <Slideshow img1={img1} img2={img2} img3={img3} img4={gym1} gym={gym} />

            </div>
            <motion.div
            variants={fadeIn('left',0.3)}

            initial="hidden"
            animate="show">
                <a href='#contact-form' style={{textDecoration:'none'}}>
                <button className='book-now-btn'>Book Now</button>
                    
                </a>
            </motion.div>
            <AboutUs/>
            <Services/>
        <Contact/>
        </div>
        
    );
}

export default Home;