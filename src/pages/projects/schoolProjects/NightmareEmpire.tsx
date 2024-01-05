import * as React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ParagraphSection from '../../../components/ParagraphSection';

function NightmareEmpire() {
    return (
        <div className="page">
            <ParagraphSection divider>
                <SectionHeader section='The Project' />
                <p>
                    The assignment for this project was to create a video game using GameMaker.
                </p>
                <p>
                    I worked with Mark Reifsteck and Akshit Sharma in order to create our game, Nightmare Empire.
                </p>
            </ParagraphSection>

            <ParagraphSection divider>
                <SectionHeader section='The Game' />
                <p>
                    The idea for our game was to make a 2-player, rogue-like dungeon crawler game.
                </p>
                <p>
                    One player would control the mouse, and they were responsible for spawning enemies that the other player would fight, trying to prevent them from progressing through the levels.
                </p>
                <p>
                    The other player would control the keyboard. They would choose a class at the start of the game, and play through the 5 levels of the dungeon, levelling up the whole way, and try to defeat the mouse player.
                </p>
            </ParagraphSection>

            <ParagraphSection imageCenter>
                <SectionHeader section='What does it look like?' />
                <p>
                    There is a lot that went into this game, as we had to develop about 20 different abilities and 6 different enemy AIs (and a boss fight!), so it is hard to really see what this game is about using just this image, unfortunately.
                </p>
                <img src={require('../../../img/ne.png')} width="1000px" alt="Layout of our game Nightmare Empire" />
            </ParagraphSection>
        </div>
    );
}

export default NightmareEmpire;
