import * as React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ParagraphSection from '../../../components/ParagraphSection';

function AlgoBowl() {
    return (
        <div className="page">
            <ParagraphSection divider>
                <SectionHeader section='The Project' />
                <p>
                    "You are given n jobs, m workstations and an n×m two-dimensional task matrix T of the time each job will spend at each workstation. Each job becomes available at a specified time and may be processed in only one workstation at a time. Each workstation may process only one job at a time. The goal is to assign a start time for each job at each workstation that minimizes the finish time of the last job."
                </p>
                <p>
                    So, essentially the project is to create a scheduler, which finds the most efficient way to block all of the tasks together. This problem description generalizes to m workstations, though a requirement of all submitted input was that there are 3, so the code created fits that specifically.
                </p>
            </ParagraphSection>

            <ParagraphSection divider>
                <SectionHeader section='Example Input' />
                <p>
                    n m
                </p>
                <p>
                    [time the task becomes available] [finish time for workstation 1 ] [finish time for workstation 2 ]
                </p>
                <p>... ...</p>
                <code>
                    6 2 <br />
                    10 10 6 <br />
                    0 7 9 <br />
                    0 3 8 <br />
                    3 1 2 <br />
                    0 12 7 <br />
                    20 6 6
                </code>
            </ParagraphSection>

            <ParagraphSection imageCenter divider>
                <SectionHeader section='Potential Solution' />
                <img src={require('../../../img/ab.png')} alt="An exmaple solution" />
                <p>
                    This provided solution is not necessarily optimal, just a valid solution given the data.
                </p>
            </ParagraphSection>

            <ParagraphSection divider>
                <SectionHeader section='Validity' />
                <p>
                    A solution is valid if it meets the following requirements:
                </p>
                <ul>
                    <li>Tasks from the same job do not overlap.</li>
                    <li>All jobs have been processed.</li>
                    <li>All jobs begin at or after the time they become available.</li>
                </ul>
            </ParagraphSection>

            <ParagraphSection divider>
                <SectionHeader section='Our Solution' />
                <p>
                    The algorithm that we implemented can be described using the following steps.
                </p>
                <p>
                    Starting at t=0,
                </p>
                <ul>
                    <li>Choose the workstation with the lowest t value (randomly select one if they are tied).</li>
                    <li>Compile a list of all available tasks at that time.</li>
                    <li>From that list, determine if any of those tasks are already being run on different stations. Only select from ones that aren't being processed at this time step.</li>
                    <li>Randomly select a task to process from the list of valid choices.</li>
                    <li>Process this task, adding its runtime to the t value for this station.</li>
                    <li>If there aren't any tasks that can be run at this time, increment t by 1.</li>
                    <li>Repeat.</li>
                </ul>
                <p>
                    In order to produce a more optimal solution, the algorithm was run multiple times to account for the random choices that were being made.
                </p>
            </ParagraphSection>

            <ParagraphSection>
                <SectionHeader section='The Competition' />
                <p>
                    This project was done in the form of a competition. We arranged into groups, and each group had to submit a valid input for the problem. Once all of the inputs had been submitted, our algorithm had to be run on each input, and we submitted an output for each one. The group with the best time (in terms of scheduling units, not runtime) for each input won the competition. The year that I took part, there was an unprecedented six-way tie. In the tiebreakers, my team consisting of Azam Abidjanov, Matt Bussing, and I, took first place.
                </p>
            </ParagraphSection>
        </div>
    );
}

export default AlgoBowl;
