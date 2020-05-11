import React from 'react';
import Stage from '../Stage/Stage';
import Display from '../Display/Display';
import StartButton from '../StartButton/StartButton';
import { createStage } from '../../gameHelpers';
import { StyledTetris, StyledTetrisWrapper } from './StyledTetris';

const Tetris = () => {


    return ( 
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()}/>
                <aside>
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
     );
}
 
export default Tetris;