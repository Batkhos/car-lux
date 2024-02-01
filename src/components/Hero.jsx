import React from 'react';
import './Herostyle.css'

export default function Hero (props) {
  return (
    <div>
        <div className={props.cName}>
            <img src={props.heroImg}
             alt="heroImg" />

             <div className='hero-text'>
                <h1>{props.text}</h1>
                <p>{props.pagh}</p>
                <a href={props.url} className={props.btnClass}>
                  {props.buttonText}
                </a>
             </div>
        </div>
    </div>
  )
}
