import { Component } from "react";
import './DestinationStyle.css'

class DestinationData extends Component {
    render(){
        return(
        <div className='first-des'>
            <div className='des-text'>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className='image'>
                <img src={this.props.image1} alt="img" />
                <img src={this.props.image2} alt="img" />
            </div>
        </div>
        )
    }
}
export default DestinationData