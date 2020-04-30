import { User } from './user.interface';
import { Board } from './board.interface';

export interface State {
    app: {
        isLoading: boolean;
        currentUrl: string;
        isLoggedIn: boolean;
    };

    user: User | null;

    activeBoard: {
        board: Board;
        belongsTo?: number;
        collaborators?: User[];
    } | null;
}
