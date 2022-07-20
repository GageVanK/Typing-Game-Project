import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Only styling the Link so we can use default export instead of const
export const StyledHomeLink = styled(Link)`
    font-size: 1.2rem;
    text-align: center;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
        text-decoration: underline;
        color: #2d545e;
    }
`

export const StyledHomeHeader = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
`

