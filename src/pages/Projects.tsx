import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import ParagraphSection from '../components/ParagraphSection';
import Button from '../components/Button';

function Projects() {
    return (
        <div className="page">
            <ParagraphSection divider>
                <SectionHeader section='Professional Career' />
                <p>
                    Here you can find some details into some of the work that I've done as a full stack developer.
                </p>
                <Button buttonText='Read More' link="/projects/professionalCareer"/>
            </ParagraphSection>
            <ParagraphSection divider>
                <SectionHeader section='School Projects' />
                <p>
                    These are all the projects that I developed during my time at the Colorado School of Mines that I thought were worth sharing.
                </p>
                <Button buttonText='Read More' link="/projects/schoolProjects"/>
            </ParagraphSection>
            <ParagraphSection>
                <SectionHeader section='Personal Projects' />
                <p>
                    These are all of the projects that I have developed in my spare time. Most of these were developed before I began my professional career as a full stack developer.
                </p>
                <Button buttonText='Read More' link="/projects/personalProjects"/>
            </ParagraphSection>
        </div>
    );
}

export default Projects;
