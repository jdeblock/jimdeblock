import * as React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ParagraphSection from '../../../components/ParagraphSection';
import Button from '../../../components/Button';

function ThisWebsite() {
    return (
        <div className="page">
            <ParagraphSection divider>
                <SectionHeader section='2019' />
                <p>
                    In 2019, after graduating from the Colorado School of Mines and beginning my job search in the field for the first time, I developed a similar version of this website in an attempt to create a digital resume. It was made using raw HTML and CSS, and nothing more.
                </p>
                <p>
                    Looking back at it after 4 years in the field, I felt that I could improve the overall structure of the website by using things that I had learned in the field.
                </p>
            </ParagraphSection>

            <ParagraphSection>
                <SectionHeader section="2024" />
                <p>
                    This website was made using React.js and Typescript. The overall content on it is similar to what I had created in 2019, but with a structure that I was more proud of.
                </p>
                <Button link="https://github.com/jdeblock/jimdeblock" buttonText='View the source code'/>
            </ParagraphSection>
        </div>
    );
}

export default ThisWebsite;
