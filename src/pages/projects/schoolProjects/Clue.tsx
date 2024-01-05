import * as React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ParagraphSection from '../../../components/ParagraphSection';

function Clue() {
    return (
        <div className="page">
            <ParagraphSection divider>
                <SectionHeader section='The Project' />
                <p>
                    The assignment for this project was to make a playable version of the classic boardgame, Clue using Java. I worked in a group with Graham Kitchenka and Brandon Verkamp, and we simply went forward with the project, adding in all the necessary elements as specified by the professor.
                </p>
                <p>
                    It plays very much like the game Clue, so I'm not going to explain it in much detail here.
                </p>
            </ParagraphSection>

            <ParagraphSection imageCenter>
                <SectionHeader section='What does it look like?' />
                <img src={require('../../../img/clue.JPG')} alt="Layout of a clue game made in Java" />
            </ParagraphSection>
        </div>
    );
}

export default Clue;
