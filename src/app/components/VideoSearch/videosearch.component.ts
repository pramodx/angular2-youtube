import {Component} from "@angular/core";
import {YouTubeService} from "../../services/youtube.service";
import {Observable} from "rxjs";

@Component({
	selector: 'VideoSearch',
	moduleId: module.id,
	templateUrl: 'videosearch.component.html',
	styleUrls: ['videosearch.component.css'],
	providers: [YouTubeService]
})
export class VideoSearchComponent {
	
	searchResults:Observable<any>;
	
	constructor(private _youtubeService: YouTubeService){}
	
	youtubeSearch(query){
		this._youtubeService.getAllVideos(query)
			.subscribe(data => {
				this.searchResults = data;
				console.log(this.searchResults);
			})
		
	}
	
}