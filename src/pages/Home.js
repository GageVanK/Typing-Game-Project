import { Link } from "react-router-dom";
import { StyledHomeLink , StyledHomeHeader } from "../styled-components/StyledHome";

function Home() { 
    return (
    <div>
        <StyledHomeHeader>Ready To Play?</StyledHomeHeader>
        <StyledHomeLink to="/game">Click to Begin!</StyledHomeLink>
    </div>
    );
}

export default Home;