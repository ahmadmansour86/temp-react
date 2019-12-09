import React from 'react';
import { HomeSection, HomeInfo, HomeTitle, HomeText, HomeDesc, HomeSpan, HomeBtn } from './HomeStyle.js';

const Home = () => {
    return(
        <HomeSection>
            <div className="container">
                <HomeInfo>
                    <HomeTitle className="margin-bottom">Ahmad Mansour</HomeTitle>
                    <HomeText>Creative Developer</HomeText>
                    <HomeDesc>
                        I am a professional <HomeSpan>UX Designer</HomeSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInfo>
            </div>
        </HomeSection>
    )
}
export default Home;