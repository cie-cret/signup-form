import React, { useState } from 'react'
import './Hero.css';
import UserData from '../UserData/UserData';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

function Hero() {

    return (
        <section className="h-wrapper">
            <div className="innerWidth flexCenter h-container">
                <div className="paddings h-left">
                    <h1>Learn to code by watching others</h1>
                    <p>See how experienced developers solve problems in real-time.
                        Watching scripted tutorials is great, but understainding how developers think is invaluable.
                    </p>
                </div>
                <div className="paddings h-right">
                    <div className="try-button">
                        <button className="purple-button button-text">Try it free 7 days <span className='gray-text'>then $20/mo. thereafter</span></button>
                    </div>
                    <UserData />
                </div>
            </div>
        </section>
    )
}

export default Hero;