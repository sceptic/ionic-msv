import { Component } from '@angular/core';
import { PostCollection } from '../post/post-collection';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private postCollection: PostCollection) {}
}

