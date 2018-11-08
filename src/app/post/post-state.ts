import { Injectable } from '@angular/core';
import { PostEntity } from './post-entity';

@Injectable({
  providedIn: 'root'
})
export class PostState {

  entity: PostEntity;
  isLiked: boolean;
  isBookmark: boolean;

  constructor() {}

  like() {
    this.entity.addLike();
    this.isLiked = true;
  }

  unlike() {
    this.entity.removeLike();
    this.isLiked = false;
  }
}
