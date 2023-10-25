export const BLOCK_SIZE = 20;
export const BOARD_WIDTH = 14;
export const BOARD_HEIGHT = 30;
export const audio = new window.Audio('/public/tetris.mp3')
audio.volume = 0.1

export const EVENT_MOVEMENTS = {
    RIGTH:"ArrowRight",
    LEFT : "ArrowLeft",
    UP  : "ArrowUp",
    DOWN : "ArrowDown"
}