import { Component } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public store: Store) {}
}

