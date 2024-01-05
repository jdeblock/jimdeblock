import * as React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ParagraphSection from '../../../components/ParagraphSection';
import Button from '../../../components/Button';

function MinecraftCommandHelper() {
    return (
        <div className="page">
            <ParagraphSection divider>
                <SectionHeader section='What does it do?' />
                <p>
                    This program allows one to easily generate commands for Minecraft. It presents the user with all the necessary fields for the chosen command in order to create an easy to understand experience for the user.
                </p>
            </ParagraphSection>

            <ParagraphSection divider imageCenter>
                <SectionHeader section='What does it look like?' />
                <img src={require('../../../img/ch1.png')} alt="Layout of my Minecraft Command Helper page" />
            </ParagraphSection>

            <ParagraphSection divider imageCenter>
                <SectionHeader section='In Action' />
                <img src={require('../../../img/ch2.png')} alt="Layout of my Minecraft Command Helper page with example text" />
            </ParagraphSection>

            <ParagraphSection divider imageCenter>
                <SectionHeader section='/scoreboard' />
                <p>
                    After choosing some commands, a new window will appear in order to make those commands even easier. The main window will appear again after closing the newly popped up one.
                </p>
                <img src={require('../../../img/ch3.png')} alt="Layout of the /scoreboard section of the program" />
            </ParagraphSection>

            <ParagraphSection divider imageCenter>
                <SectionHeader section='/tellraw' />
                <img src={require('../../../img/ch4.png')} alt="Layout of the /tellraw section of the program" />
            </ParagraphSection>

            <ParagraphSection>
                <SectionHeader section='Unfinished' />
                <p>
                    Unfortunately, this program remains unfinished. Data/Player tag editors were started, but were never finished since my interest in the project waned. Also, as of one of the more recent updates to Minecraft completely overhauled the command system, this current version is very outdated. Nonetheless, if interested, it can be downloaded here.
                </p>
                <Button link="http://www.mediafire.com/file/5ar4y9yyx1836ut/Minecraft_Command_Helper.exe/file" buttonText='Download'/>
            </ParagraphSection>
        </div>
    );
}

export default MinecraftCommandHelper;
