export const TETROMINOS = {
    0: {shape: [[0]], color: '0, 0, 0' },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
            ],
        color: '50, 200, 200',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
            ],
        color: '30, 100, 210',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
            ],
        color: '210, 100, 30',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
            ],
        color: '250, 170, 40',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
            ],
        color: '50, 200, 50',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '188, 42, 132',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
            ],
        color: '220, 20, 20',
    },
}

export const getRandomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randomTeromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randomTeromino];
}