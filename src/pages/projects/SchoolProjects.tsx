import * as React from 'react';
import SectionHeader from '../../components/SectionHeader';
import ParagraphSection from '../../components/ParagraphSection';
import Button from '../../components/Button';

function SchoolProjects() {
    return (
        <div className="page">
            <ParagraphSection divider>
                <SectionHeader section='AlgoBowl' />
                <p>
                    A competetion that was carried out in an Algorithms class.
                </p>
                <Button link="/projects/schoolProjects/algoBowl" buttonText='Read More' />
            </ParagraphSection>

            <ParagraphSection divider>
                <SectionHeader section='Clue' />
                <p>
                    A project that was made for a Java class.
                </p>
                <Button link="/projects/schoolProjects/clue" buttonText='Read More' />
            </ParagraphSection>

            <ParagraphSection divider>
                <SectionHeader section='Pantry Planner' />
                <p>
                    A project that was made for an Android Studio class.
                </p>
                <Button link="/projects/schoolProjects/pantryPlanner" buttonText='Read More' />
            </ParagraphSection>

            <ParagraphSection divider>
                <SectionHeader section='Nightmare Empire' />
                <p>
                    A project that was made for a Game Development class.
                </p>
                <Button link="/projects/schoolProjects/nightmareEmpire" buttonText='Read More' />
            </ParagraphSection>

            <ParagraphSection>
                <SectionHeader section='Solar System Simulation' />
                <p>
                    A project that was made for a Graphics class.
                </p>
                <Button link="/projects/schoolProjects/solarSystem" buttonText='Read More' />
            </ParagraphSection>
        </div>
    );
}

export default SchoolProjects;
