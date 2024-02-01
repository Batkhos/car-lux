import './RentStyle.css'

export default function RentData(props) {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img src={props.image1} alt="image" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}
