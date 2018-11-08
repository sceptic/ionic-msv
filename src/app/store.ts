import { Injectable } from '@angular/core';
import { PostCollection } from './post/post-collection';
import { Session } from './session';

@Injectable({
  providedIn: 'root'
})
export class Store {
    constructor(
        public postCollection: PostCollection,
        public session: Session
    ) {}
}
