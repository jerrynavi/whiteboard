import { User } from './user.interface';

export interface State {
    app: {
        isLoading: boolean;
        currentUrl: string;
        isLoggedIn: boolean;
    };

    user: User | null;
}
