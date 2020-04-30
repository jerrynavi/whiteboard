import { createReducer, createAction } from '@reduxjs/toolkit';
import { state } from '../state';
import { Board } from '../../interfaces/board.interface';

export const boardReducer = createReducer(state.activeBoard, {
    UPDATE_ACTIVE_BOARD: (activeBoard, { payload }: { payload: Partial<Board> }) => {
        if (activeBoard) {
            const { board } = activeBoard;
            activeBoard = {
                ...activeBoard,
                board: {
                    ...board,
                    ...payload,
                },
            };
        } else {
            activeBoard = {
                board: payload as Board,
            };
        }
        return activeBoard;
    },
});

createAction('UPDATE_ACTIVE_BOARD');
