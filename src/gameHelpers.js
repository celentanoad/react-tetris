export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    );


export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y< player.tetromino.length; y += 1) {
        for (let x = 0; x< player.tetromino[y].length; x+=1) {
            //  1. check that player is on a tetromino cell
            if (player.tetromino[y][x] !==0) {
                //2. check that movement is inside game area
                if (
                    !stage[y + player.pos.y + moveY] || 
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    //3. check that cell isn't set to 'clear'
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear' 
                ) {
                    console.log('collision!')
                    return true;
                }
            }
        }
    }
};
