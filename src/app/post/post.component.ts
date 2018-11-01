import { Component, OnInit, Input } from '@angular/core';
import { PostState } from './post-state';
import { PostEntity } from './post-entity';
import { PostCollection } from './post-collection';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostState]
})
export class PostComponent implements OnInit {

  @Input() post: PostEntity;
  constructor(
    private postCollection: PostCollection,
    public postState: PostState) {
  }

  ngOnInit() {
    this.postState.entity = this.post;
  }

  delete() {
    this.postCollection.delete(this.post.post.id);
  }
}
