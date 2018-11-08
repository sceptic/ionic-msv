import { Component, OnInit, Input } from '@angular/core';
import { PostState } from './post-state';
import { PostEntity } from './post-entity';
import { Store } from '../store';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostState]
})
export class PostComponent implements OnInit {

  @Input() post: PostEntity;
  constructor(
    private store: Store,
    public postState: PostState) {
  }

  ngOnInit() {
    this.postState.entity = this.post;
  }

  delete() {
    this.store.postCollection.delete(this.post.data.id);
  }
}
