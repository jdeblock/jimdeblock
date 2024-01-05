import * as React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ParagraphSection from '../../../components/ParagraphSection';

function SolarSystem() {
    return (
        <div className="page">
            <ParagraphSection divider>
                <SectionHeader section='The Project' />
                <p>
                    The assignment for this project was incredibly open-ended. We simply had to meet all the requirements for a program written in C++ / OpenGL.
                </p>
                <p>
                    I worked with Alan Son and Kepler Novotny in order to create a basic simulation of our solar system, that the user can fly around in.
                </p>
            </ParagraphSection>

            <ParagraphSection imageCenter>
                <SectionHeader section='What does it look like?' />
                <p>
                    Truthfully it is difficult to capture all that this program has to offer with just an image, but here is an example of what it looked like.
                </p>
                <img src={require('../../../img/ss.jpg')} alt="Layout of a clue game made in Java" />
            </ParagraphSection>
        </div>
    );
}

export default SolarSystem;
