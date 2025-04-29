import Contact from "./components/contact";
import Home from "./components/Home";
import Nav from "./components/nav";
import Footer from "./components/footer";
function App() {
  return (
    <div className="app">
      <Nav/>
      <Home/>
      <div style={{ width: "100%", height: "500px",background:"white" }} className="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.856657632079!2d77.76094057513446!3d12.981018587335193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f005bd38bdb%3A0xe35eb91a53352739!2sSLR%20Bliss%20Pg%20for%20Gents!5e0!3m2!1sen!2sin!4v1745915806606!5m2!1sen!2sin"
        width="100%"
        height="98%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="SLR Bliss PG Location"
      ></iframe>
    </div>
      <Footer/>
      {/* <Contact/> */}
      

    </div>
  );
}

export default App;