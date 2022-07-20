import styled from "styled-components";

export const StyledGameDiv = styled.div`
    //Making our Game Div take up 75% of the screen height
    height: 75vh;
    //Setting max height of Game Div
    max-height: 500px;
    //Grid display for Score, Timer, and Letters
    display: grid;
    //Allows Score/Timer rows to take up 50px and the Letter row to take up the rest of the space
    grid-template-rows: 50px 1fr;
    //Using minmax() function passing in our min and max values to set the size of individual columns
    //We want our Score/Timer to take up at least 50px of space and our Letters to take up the rest
    grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);

`
//Score defaults to column 1
export const StyledScore = styled.p`
    font-size: 1.5rem;
`

export const StyledTimer = styled.p`
    grid-column: 3;
    font-size: 1.5rem;

`
export const StyledLetters = styled.p`
    color: #2d545e;
    font-size: 15rem;
    //We want to display our letters in the center in between the Score and Timer
    grid-row: 2;
    //Allowing the letter to take up the full width of the grid
    grid-column: 1/4;
    //Centering the letter
    text-align: center;
    
`   
//Setting score/time w/ bold font to stand out
export const StyledStrong = styled.strong`
    font-weight: bold;
`