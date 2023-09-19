import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../components/HeroSection.css'
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Keep calm e fai acquisti.</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Link to="/" className='btn-mobile'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Sign-UP
                    </Button>
                </Link>

               

                


                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
                
            </div>
        </div>
    );
}

export default HeroSection;