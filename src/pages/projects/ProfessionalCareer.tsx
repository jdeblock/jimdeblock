import * as React from 'react';
import SectionHeader from '../../components/SectionHeader';
import ParagraphSection from '../../components/ParagraphSection';

function ProfessionalCareer() {
    return (
        <div className="page">
            <ParagraphSection>
                <SectionHeader section="Woodridge Software" />
                <p>
                    These are some of the projects that I worked on during my time with Woodridge Software.
                </p>
                <p>
                    I will not be able to link to any images or talk about them in much detail, unfortunately, but hopefully I can give you an idea of some of the things that I worked on during my time there.
                </p>
                <ParagraphSection divider>
                    <SectionHeader section='Social Media Website and iOS App' />
                    <p>
                        This project was comprised of three different sections. A website made using Vue.js, an API made using Laravel, and an iOS app made using Swift.
                    </p>
                    <p>
                        During my time on the project, I worked on each individual section. I was able to develop login flows, administator pages, as well as icons and other components as needed for the front end.
                    </p>
                    <p>
                        I worked on creating and updating the structure of the MySQL database, and things like creating API routes that could query said database in order to filter for specific posts.
                    </p>
                    <p>
                        For the iOS app, I worked where needed on creating pages like the login flow.
                    </p>
                </ParagraphSection>

                <ParagraphSection divider>
                    <SectionHeader section='Time Tracking Website' />
                    <p>
                        This project was comprised of two different sections. A website made using React.js, and an API made using Laravel.
                    </p>
                    <p>
                        I worked on both sections of this project, as I was in charge of implementing pages, as well as indivudal components on the front end, and I implemented API routes as needed on the back end.
                    </p>
                </ParagraphSection>

                <ParagraphSection divider>
                    <SectionHeader section='Bank Form Flows' />
                    <p>
                        This project was made in React.js, and I worked as needed on adding individual pages for specific parts of the form.
                    </p>
                </ParagraphSection>

                <ParagraphSection>
                    <SectionHeader section='Various Maintenance Work' />
                    <p>
                        Or course, for a number of different projects, I was brought onto mostly complete projects that just needed small tasks and maintenance work to be completed.
                    </p>
                </ParagraphSection>
            </ParagraphSection>
        </div>
    );
}

export default ProfessionalCareer;
