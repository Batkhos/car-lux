import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Destination from '../components/Destination';
import Rent from '../components/Rent';
import Footer from '../components/Footer';

function Home(){
    return(
        <div>
            <Navbar/>
            <Hero
            cName="hero"
            heroImg="https://images.unsplash.com/photo-1515049497350-e9dfc9527f5d?q
            =80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b
            y1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="Luxury Cars"
            pagh="EXPLORE 7,000+ LUXURY CARS, SUPERCARS AND EXOTIC CARS FOR SALE WORLDWIDE IN ONE SIMPLE SEARCH"
            buttonText="Create Plane"
            url="/"
            btnClass="show"
            />
            <Destination/>
            <Rent/>
            <Footer/>
        </div>
    )
}

export default Home;