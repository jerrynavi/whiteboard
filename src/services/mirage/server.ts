import { Server, Model, Factory } from 'miragejs';
import user from './routes/user';

export const errorResponse = (message = 'An error ocurred'): {
    data: {
        message: string;
    };
} => {
    return {
        data: {
            message,
        },
    };
};

export const setupServer = (opts: { env: string }): Server => {
    const { env } = opts;

    return new Server({
        environment: env ?? 'test',

        models: {
            user: Model,
        },

        factories: {
            user: Factory.extend({
                username: 'test',
                password: 'password',
                email: 'test@domain.com',
            }),
        },

        seeds: (server): any => {
            server.create('user');
        },

        routes(): void {
            this.urlPrefix = 'https://api.whiteboard.dev';

            this.post('/auth/login', user.login);
            this.post('/auth/signup', user.signup);
        },

    });
};
