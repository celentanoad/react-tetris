import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';
import useSound from 'use-sound';
import success from '../success.mp3';



export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);

    
    const [play, { stop }] = useSound(success);


    useEffect(() => {
        setRowsCleared(0);
        
        const sweepRows = newStage => 
            newStage.reduce((acc, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1);
                    play();
                    acc.unshift(new Array(newStage[0].length).fill([0, 'clear']));
                    return acc;
                } 
                acc.push(row);
                return acc;
            }, [])

        const updateStage = prevStage => {
            //First clear stage from previous render
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1]==='clear' ? [0, 'clear'] : cell))
            );

            //Render the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });
            if (player.collided) {
                resetPlayer();
                return sweepRows(newStage);
            }
            return newStage;
        };
        setStage(prev => updateStage(prev))
    }, [player, resetPlayer]);

    return [stage, setStage, rowsCleared];
}