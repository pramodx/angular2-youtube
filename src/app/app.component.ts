import { Component } from '@angular/core';
import {VideoSearchComponent} from "./components/VideoSearch/videosearch.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [VideoSearchComponent]
})
export class AppComponent {
  
}
