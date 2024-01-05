import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import ParagraphSection from '../components/ParagraphSection';

function AboutMe() {
    return (
        <div className="page">
            
            <ParagraphSection imageAlign="left" imageBorder divider>
                <SectionHeader section='Who am I?' />
                <img src={require('../img/IMG_2840.png')} alt="Me in a dark blue shirt" />
                <p>
                    My name is Jim DeBlock, and I am a full stack developer with experience in React, Vue, Python, Laravel, PhP, Javascript, Java, and CSS/SCSS. I graduated from the Colorado School of Mines with a Bachelor's degree in Computer Science, and a minor in Computational and Applied Mathematics.
                </p>
                <p>
                    This website is a place where you can maybe learn a bit more about me, see some of my previous experience, and get in touch.
                </p>
            </ParagraphSection>

            <ParagraphSection imageAlign="right" imageBorder>
                <img src={require('../img/IMG_9089.png')} alt="Me in a light gray shirt" />
                <p>
                    I was originally born in Connecticut, but my family moved to Colorado about 10 years ago, and I've been living here ever since. I am located currently in Westminster Colorado.
                </p>
                <p>
                    When I'm not programming, I mostly play video games, trading card games, or tabletop games like D&D.
                </p>
            </ParagraphSection>
        </div>
    );
}

export default AboutMe;
