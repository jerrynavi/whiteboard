import { Http } from './http';
import { User } from '../interfaces/user.interface';


export class UserService {
    constructor() {
        this.instance = new Http();
    }

    private instance: Http;

    public login = (user: Pick<User, 'username' | 'password'>): Promise<User> => {
        return this.instance.post('/auth/login', user);
    }

    public signup = (user: Partial<User>): Promise<User> => {
        return this.instance.post('/auth/signup', user);
    }
}