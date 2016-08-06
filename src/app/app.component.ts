import {Component} from '@angular/core';
import {VideoSearchComponent} from "./components/VideoSearch/videosearch.component";
import {VideoListComponent} from "./components/VideoList/videolist.component";
import {VideoDetailComponent} from "./components/VideoDetails/videodetail.component";

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [VideoSearchComponent, VideoListComponent, VideoDetailComponent]
})
export class AppComponent {
	videos:Array<any> = [];
	selectedVideo:any;
	
	setVideoList(videos){
		console.log('set video list');
		this.videos = videos;
		this.selectedVideo = this.videos[0]
	}
	
	setSelectedVideo(video){
		console.log('set selected video');
		this.selectedVideo = video;
	}
}
