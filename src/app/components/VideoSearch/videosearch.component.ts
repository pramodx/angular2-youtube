import {Component, EventEmitter, Output} from "@angular/core";
import {YouTubeService} from "../../services/youtube.service";
import {Observable} from "rxjs";

@Component({
	selector: 'VideoSearch',
	moduleId: module.id,
	templateUrl: 'videosearch.component.html',
	styleUrls: ['videosearch.component.css'],
	providers: [YouTubeService],
	outputs: ['onSearch']
})
export class VideoSearchComponent {
	
	searchResults:Observable<any>;
	onSearch: EventEmitter<any>
	
	constructor(private _youtubeService: YouTubeService){
		this.onSearch = new EventEmitter();
	}
	
	youtubeSearch(query){
		console.log('youtube search');
		this._youtubeService.getAllVideos(query)
			.subscribe(data => {
				this.searchResults = data;
				this.onSearch.emit(data);
			})
		
	}
	
}