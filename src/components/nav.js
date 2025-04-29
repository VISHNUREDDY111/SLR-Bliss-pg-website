
import './nav.css';
import {motion} from 'framer-motion';
import { fadeIn } from './variants';
import { style } from 'framer-motion/m';
import { useState } from 'react';

function Nav(){
    const [open,setopen]=useState(false);
    const toggleopen = ()=>{
        setopen(!open);
    }
    console.log(open);

    return (
        <div className='nav-bar'>
            <motion.nav
              variants={fadeIn('down',0.3)}
              initial="hidden"
              whileInView={"show"}
              animate="show">
            <div>
                <h1> <i class="fa-solid fa-phone"></i> 8340968829 / 9148141544 </h1>
                <button className='menu-exit-btn' onClick={toggleopen}> <i class="fa-solid fa-bars" ></i></button>
            </div>
            
            
            <div className='menu'>
                <ul className={open ? 'open':''}>
                    <li><a  onClick={toggleopen} href='#'><i class="fa-solid fa-house"></i>   Home</a></li>
                    <li><a onClick={toggleopen} href='#services'><i class="fa-solid fa-list-check"></i> services</a></li>
                    <li><a  onClick={toggleopen}href='#contact-form'><i class="fa-solid fa-id-badge"></i> Contact</a></li>
                    <li> <a onClick={toggleopen} href='https://forms.gle/jvAxDR79CA3YN6pp8'><i class="fa-solid fa-user-plus"></i> Register</a></li>
                    
                </ul>
                
            </div>

            </motion.nav>
            
            
        </div>
    );
}
export default Nav;


