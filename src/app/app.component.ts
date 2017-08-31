import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public tagName: string = '';
  public posts: any;

  constructor(private api: ApiService) {

  }

  public getPostsByTag() {

    this.api.request(`http://127.0.0.1:8001?tagName=${this.tagName}`, 'get').then((data) => {
      console.log(data);
      this.posts = data;
    });
  }

  public getBackground(color) {

    return `#${color}`;
  }
}
