import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FormContact from '../components/FormContact';



function Contact(){
    return(
        <div> 
            <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg="https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            text="Contact"            
            />
            <FormContact/>
            <Footer/>
        </div>
    )
}

export default Contact;