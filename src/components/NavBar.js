import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <div>
                <Link to="/">Typing Game!</Link>
            </div>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/highScores">HighScores</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;