import { User } from './user.interface';

export interface Board {
    id?: number;
    title: string;
    dimensions: {
        width: string;
        height: string;
    };
    src?: string;
    previewUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
    user?: User;
}