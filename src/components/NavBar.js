import { Link } from "react-router-dom";
import { StyledNavBar, StyledNavTitle, StyledNavList, StyledLink } from "../styled-components/StyledNavBar";
function NavBar() {
    return(
        <StyledNavBar>
            <StyledNavTitle>
                <Link to="/">Typing Game React Project</Link>
            </StyledNavTitle>

            <StyledNavList>
                <li><StyledLink to="/">Home</StyledLink></li>
                <li><StyledLink to="/highScores">High-Scores</StyledLink></li>
            </StyledNavList>
        </StyledNavBar>
    );
}

export default NavBar;