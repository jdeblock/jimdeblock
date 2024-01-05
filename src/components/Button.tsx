import * as React from 'react';
import { Link } from "react-router-dom";
import './Button.css';

interface Props {
    link: string
    buttonText: string
}

function Button({ link, buttonText }: Props) {
    return (
        <Link to={link} className="button">{buttonText}</Link>
    )
};

export default Button;
