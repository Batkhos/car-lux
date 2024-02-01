import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Rent from '../components/Rent';



function Service(){
    return(
        <div>
            <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg="https://images.unsplash.com/photo-1441864452027-8d5ba1dccb84?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            text="Service"            
            />
            <Rent/>
            <Footer/>
        </div>
    )
}

export default Service;