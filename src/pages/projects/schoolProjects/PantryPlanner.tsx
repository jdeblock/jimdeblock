import * as React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ParagraphSection from '../../../components/ParagraphSection';

function PantryPlanner() {
    return (
        <div className="page">
            <ParagraphSection divider>
                <SectionHeader section='The Project' />
                <p>
                    The assignment for this project was simply to meet all the requirements while developing a mobile app (developed in Android Studio).
                </p>
                <p>
                    I worked with Alan Son and Ryan Hooker to create an app that helped the user keep track of all the food that they have in their house. In addition to this, the app allows the user to manage recipes, shopping lists, and to help schedule their grocery shopping.
                </p>
            </ParagraphSection>

            <ParagraphSection imageCenter>
                <SectionHeader section='What does it look like?' />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/y6WB_g7qDqw" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder={0} title="Pantry Planner" />
            </ParagraphSection>
        </div>
    );
}

export default PantryPlanner;
