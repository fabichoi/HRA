import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow } from 'lib/styleUtils';


const BorderedButton = styled(Link)`
    font-weight: 600;    
    color: ${props => props.color || oc.cyan[6]};
    border: 1px solid ${props => props.border || oc.cyan[6]};
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: .2s all;
    margin-left: 10px;

    &:hover {
        background: ${props => props.background || oc.cyan[6]};
        color: white;
        ${shadow(1)}
    }

    &:active {        
        transform: translateY(3px);
    }
`;

const BrdBtn = ({children, to, color, background, border}) => (
    <BorderedButton to={to} color={color} background={background} border={border}>
        {children}
    </BorderedButton>
);

export default BrdBtn;