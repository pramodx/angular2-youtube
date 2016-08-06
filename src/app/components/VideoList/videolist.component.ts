
import {Component, EventEmitter, Output} from "@angular/core";
@Component({
	moduleId: module.id,
	selector: 'VideoList',
	templateUrl: './videolist.component.html',
	styleUrls: ['./videolist.component.css'],
	inputs: ['videos']
})
export class VideoListComponent {
	videos:Array<any>
	@Output() VideoSelect = new EventEmitter();
	
	
	onVideoSelect(video){
		console.log('video select');
		this.VideoSelect.emit(video)
	}
}