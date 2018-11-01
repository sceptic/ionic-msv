import { Injectable } from '@angular/core';
import { PostEntity } from './post-entity';

@Injectable({
  providedIn: 'root'
})
export class PostState {

  isLiked: boolean;
  entity: PostEntity;

  constructor() {}

  like() {
    if (this.entity.addLike()) {
      this.isLiked = true;
    }
  }
}
