import React from 'react';
import Home from './Home';
import Works from './Works';
import Portfolio from './Portfolio';
import Profile from './Profile';
import About from './About';
import Media from './Media';
import Footer from './Footer';

const Main = () => {
    return(
        <div>
            <Home />
            <Works />
            <Portfolio />
            <Profile />
            <About />
            <Media />
            <Footer />
        </div>
    )
}
export default Main;