import './footer.css' ;

function Footer(){
    return(
        <div className='footer-container'>

        
        <div className="mainfooter">
            <div>
                <ul>
                    <h5 style={{fontWeight:"bolder"}}>Quick links</h5>
                    <a href='#'> <li>Home</li></a>
                    <a href='#contact-form'><li>contact</li></a>
                    <a href='#services'><li>services</li></a>
                    <a href='https://forms.gle/jvAxDR79CA3YN6pp8'><li>Register</li></a>
                    
                </ul>
            </div>
            <hr/>
            <div>
                <ul>
                    <h4>For any queries </h4>
                    <li><a>vishnuvardhanreddyguntha1@gmail.com</a></li>
                    <li><a >8340968829 / 9148141544</a></li>
                </ul>
            </div>
            <hr/>
            <div>
                <h4>Follow us</h4>
                <ul className='footer-icons'>
                    <li><i class="fa-brands fa-instagram"></i> </li>
                    <li><i class="fa-brands fa-facebook"></i> </li>
                    <li><i  class="fa-brands fa-youtube"></i> </li>
                    <li><i class="fa-brands fa-x-twitter"></i> </li>
                </ul>
            </div>
        </div>
        <div className='copyright-div'>
            <h6 className='copyright'>© 2025 SLR Bliss PG. All Rights Reserved.</h6>
        </div>
        </div>
    );
}

export default Footer;