import styled from "styled-components";
import { Link  } from "react-router-dom";

export const StyledNavBar = styled.nav`
    //Breaking up the Title and Links into their own sections
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;

`
export const StyledNavTitle = styled.div`
    //Change size of Title on NavBar
    font-size: 1.5rem;
    //Gets rid of underline on the Title
    & > a {
        text-decoration: none;
    }
    `

export const StyledNavList = styled.ul`
    //Removing bullet points of UL
    list-style: none;
    //Removing default padding of UL
    padding-left: 0;
    //Grid display and every new item will have its own column on the same row
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    `

export const StyledLink = styled(Link)`
    //Removing Link underlines
    text-decoration: none;
    transition: color 0.2s;
    //Change color of Links on hover
    &:hover {
        
        color: #2d545e;
    }
    `  
