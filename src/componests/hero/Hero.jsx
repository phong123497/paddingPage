import React from 'react'
import "./hero.css"
import {HiLocationMarker} from "react-icons/hi"
import CountUp from 'react-countup'
function Hero() {
  return (
    <section className="hero-wrapper">
      {/* left side */}
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className=" flexColStart hello-left">
          <div className="hero-title">
            <div className="orange-cicle"/>
            <h1>
              Discover <br/> Most Suitable <br/> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>
            Find a variety of properties that suit you very easilty
            </span>
            <span>
            Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="search-bar">
           <HiLocationMarker color="var(--blue)" size={25}/>
           <input type='text'/>
           <button className='button'> Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4}/>
                <span>+</span>
              </span>
                <span> Premium Product </span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4}/>
                <span>+</span>
              </span>
                <span> Happy Customer</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4}/>
                <span>+</span>
              </span>
                <span> Premium Product </span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero