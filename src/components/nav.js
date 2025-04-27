
import './nav.css';
import {motion} from 'framer-motion';
import { fadeIn } from './variants';

function Nav(){

    return (
        <div className='nav-bar'>
            <motion.nav
              variants={fadeIn('down',0.3)}
              initial="hidden"
              whileInView={"show"}
              animate="show">
            <div>
                <h1> <i class="fa-solid fa-phone"></i> 8340968829 / 9148141544 </h1>
            </div>
            
            <div className='menu'>
                <ul className='navitems'>
                    <li><a href=''><i class="fa-solid fa-house"></i>   Home</a></li>
                    <li><a href='#services'><i class="fa-solid fa-list-check"></i> services</a></li>
                    <li><a href='#contact-form'><i class="fa-solid fa-id-badge"></i> Contact</a></li>
                    <li> <a href='https://forms.gle/jvAxDR79CA3YN6pp8'><i class="fa-solid fa-user-plus"></i> Register</a></li>
                    
                </ul>
            </div>
            <button className='menu-exit-btn'>X</button>
            </motion.nav>
        </div>
    );
}
export default Nav;

