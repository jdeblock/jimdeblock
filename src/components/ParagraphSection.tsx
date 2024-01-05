import * as React from 'react';
import './ParagraphSection.css';

interface Props {
    children: React.ReactNode
    imageAlign?: string
    imageBorder?: boolean
    divider?: boolean
    alignText?: string
    imageCenter?: boolean
}

function ParagraphSection({ children, imageAlign, divider, alignText, imageBorder, imageCenter }: Props) {
    return (
        <div className={`paragraphSection ${imageAlign} ${divider ? 'hasDivider' : ''} ${alignText ? `text-${alignText}` : ''} ${imageBorder ? 'image-border' : ''} ${imageCenter ? 'image-center' : ''}`}>
            {children}
        </div>
    );
}

export default ParagraphSection;
