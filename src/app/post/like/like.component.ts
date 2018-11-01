import { Component } from '@angular/core';
import { PostState } from '../post-state';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent {

  constructor(
    public postState: PostState) {
  }
}
