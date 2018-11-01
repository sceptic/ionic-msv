import { Injectable } from '@angular/core';
import { PostRepository } from './post-repository';

@Injectable({
  providedIn: 'root'
})
export class PostEntity {

  constructor(private postRepository: PostRepository) {}

  post: {id, title: string, likes: {}};

  load(post) {
    this.post = post;
    return this;
  }

  addLike() {
    this.post = this.postRepository.addLike(this.post.id);
    return true;
  }

  removeLike() {}

  addBookmark() {}
}
