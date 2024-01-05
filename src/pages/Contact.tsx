import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import ParagraphSection from '../components/ParagraphSection';

function Contact() {
    return (
        <div className="page">
            <ParagraphSection>
                <SectionHeader section='Get in Touch' />
                <p>
                    I am currently looking for employment. If you would like to reach out to me, feel free to do so via email.
                </p>
                <p>
                    email // jdeblock@mines.edu
                </p>
            </ParagraphSection>
        </div>
    );
}

export default Contact;
