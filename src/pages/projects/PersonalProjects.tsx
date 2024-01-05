import * as React from 'react';
import SectionHeader from '../../components/SectionHeader';
import ParagraphSection from '../../components/ParagraphSection';
import Button from '../../components/Button';

function PersonalProjects() {
    return (
        <div className="page">
            <ParagraphSection divider>
                <SectionHeader section='This Website' />
                <p>
                    This site was made as a digital resume, a place where you can view some of my previous works. It is, however, something that I did develop myself using React.js and Typescript.
                </p>
                <Button link="/projects/personalProjects/thisWebsite" buttonText='Read More' />
            </ParagraphSection>

            <ParagraphSection>
                <SectionHeader section='Minecraft Command Helper' />
                <p>
                    This project was designed in order to make the creation process in Minecraft that much easier. It makes creating commands a breeze by giving the user easy to understand fields, examples, and an explanation of the usage of commands. Currently unfinished, though workable enough to get most commands. This was programmed in Visual Basic.
                </p>
                <Button link="/projects/personalProjects/minecraftCommandHelper" buttonText='Read More' />
            </ParagraphSection>
        </div>
    );
}

export default PersonalProjects;
