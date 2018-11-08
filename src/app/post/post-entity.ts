import { Injectable } from '@angular/core';
import { PostRepository } from './post-repository';
import { IPost } from './IPost';

@Injectable({
  providedIn: 'root'
})
export class PostEntity {

  constructor(private postRepository: PostRepository) {}

  data: IPost;

  load(post) {
    this.data = post;
    return this;
  }

  addLike() {
    this.data = this.postRepository.addLike(this.data.id);
    return true;
  }

  removeLike() {}

  addBookmark() {}

  save() {}
}
