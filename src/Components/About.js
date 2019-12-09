import React from 'react';
import {AboutSection, AboutInfo, AboutTitle, AboutSpan, AboutDir, AboutDesc, AboutLink} from './AboutStyle.js'

const About = () => {
    return(
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <AboutTitle><AboutSpan>This is</AboutSpan> Me</AboutTitle>
                    <AboutDir>Creative Developer</AboutDir>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <AboutLink href="#">explicabo</AboutLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDesc>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}
export default About;