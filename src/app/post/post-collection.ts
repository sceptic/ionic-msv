import { Injectable } from '@angular/core';
import { PostEntity } from './post-entity';
import { PostRepository } from './post-repository';
@Injectable({
  providedIn: 'root'
})
export class PostCollection {

    list: PostEntity[];

    constructor(public postRepository: PostRepository) {}

    fetch() {
        const posts = this.postRepository.getAll();
        this.load(posts);
    }

    load(posts) {
        this.list = posts.map(post => new PostEntity(this.postRepository).load(post));
    }

    add() {}

    delete(postId: string) {
        alert(postId);
        this.list = this.list.filter(item => item.data.id !== postId);
    }
}
