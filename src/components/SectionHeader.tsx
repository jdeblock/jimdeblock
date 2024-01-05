import * as React from 'react';
import './SectionHeader.css';

export interface HeaderProps {
    section: string;
}

function SectionHeader({ section }: HeaderProps) {
    return (
        <p className='sectionHeader'>{section}</p>
    );
}

export default SectionHeader;
