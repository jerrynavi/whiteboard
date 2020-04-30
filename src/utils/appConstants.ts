import { Board } from '../interfaces/board.interface';

export const DEFAULT_TITLE = 'A real-time collaborative Whiteboard application';
export const STORE_NAME = '__whiteboard_dev';
export const DEFAULT_CANVAS_WIDTH = '1280';
export const DEFAULT_CANVAS_HEIGHT = '600';
export const DEFAULT_LINE_WIDTH = 1;
export const DEFAULT_PEN_COLOR = '#000000';
export const DEFAULT_CANVAS_BACKGROUND = '#ffffff';
export const DEFAULT_FILENAME = 'Untitled Drawing - ' + new Date().toDateString();
export const DEFAULT_BOARD: Board = {
    title: DEFAULT_FILENAME,
    dimensions: {
        height: DEFAULT_CANVAS_HEIGHT,
        width: DEFAULT_CANVAS_WIDTH,
    },
};
