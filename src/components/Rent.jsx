import RentData from "./RentData"
import "./RentStyle.css"

const Rent = () => {
  return (
    <div className='rent'>
        <h1>LUXURY CAR RENTAL</h1>
        <p>ZaouiLux has a large selection of luxury car rentals available in Morocco.
           Our fleet of vehicles includes models from some of the best car manufacturers in the world like BMW,
           Mercedes and Audi. At our branch locations found throughout Morocco we look forward to providing you with a premium vehicle
           and our excellent customer service. From behind the wheel of one of our luxury rentals 
           we can help make your Morocco trip even more memorable.
           No matter what part of the country you are planning to visit you can get a first class driving experience with ZaouiLux luxury cars.</p>
        <div className="rentcard">
        <RentData
        image1="https://sx-content-labs.sixt.io/Media/2fleet-350x200/jaguar-f-type-coupe-2d-silber-2017.png"
        heading="JAGUAR F-TYPE"
        text="The F-Type is a luxury sports car that is sure to turn heads.
         It is available as a coupe or convertible, and comes equipped with snarling supercharged engines that provide exhilarating performance"
        />

       <RentData
        image1="https://sx-content-labs.sixt.io/Media/2fleet-350x200/ford-mustang-cabrio-2d-rot-geschl-2016.png"
        heading="FORD MUSTANG"
        text="The Ford Mustang is an iconic American muscle car that has been around since 1964.
         It is a car that is synonymous with power, speed, and style. The Mustang is a car that is designed to be driven and enjoyed."
        />

       <RentData
        image1="https://sx-content-labs.sixt.io/Media/2fleet-350x200/mb-g-klasse-5d-schwarz-2015.png"
        heading="MERCEDES-BENZ G-CLASS"
        text="The Mercedes-Benz G-Class is a luxury SUV that is known for its ruggedness and off-road capabilities.
         It is a perfect vehicle for those who want to explore the great outdoors in style."
        />
        </div>
    </div>
  )
}
export default Rent