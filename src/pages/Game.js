import { StyledGameDiv, StyledScore, StyledTimer, StyledLetters, StyledStrong } from "../styled-components/StyledGame";

function Game() {
    return (
        <StyledGameDiv>
            <StyledScore>Score: <StyledStrong>0</StyledStrong></StyledScore>
            <StyledLetters>A</StyledLetters>
            <StyledTimer>Time: <StyledStrong>00:000</StyledStrong></StyledTimer>
        </StyledGameDiv>
    );
}

export default Game;