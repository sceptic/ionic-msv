import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PostCollection } from './post/post-collection';
import { PostRepository } from './post/post-repository';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [
    PostCollection,
    PostRepository
  ]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    postCollection: PostCollection
  ) {
    postCollection.fetch();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
