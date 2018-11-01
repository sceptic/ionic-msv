import { Injectable } from '@angular/core';
import { PostEntity } from './post-entity';
@Injectable({
  providedIn: 'root'
})
export class PostRepository {
    getAll() {
        return [
            {
                id: 'A',
                title: 'post A',
                likes: {}
            },
            {
                id: 'B',
                title: 'post B',
                likes: {}
            }
        ];
    }

    addLike(postId: string) {
        return {
            id: 'C',
            title: 'post C',
            likes: {
                'user-x': new Date()
            }
        };
    }

    create() {}
}
