import {Component} from "@angular/core";
import {DomSanitizationService, SafeResourceUrl} from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'VideoDetail',
	templateUrl: './videodetail.component.html',
	styleUrls: ['./videodetail.component.css'],
	inputs: ['selectedVideo']
})
export class VideoDetailComponent {
	selectedVideo:any;
	safeUrl: SafeResourceUrl;
	
	constructor(private _sanitizer:DomSanitizationService){
		
	}
	
	getResourceUrl(videoId:string){
		let videoUrl = 'https://www.youtube.com/embed/' + videoId;
		return this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
	}
}