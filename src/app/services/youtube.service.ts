
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {BASE_URL, API_TOKEN} from '../shared/index';
import 'rxjs/Rx';

@Injectable()
export class YouTubeService {
	
	
	constructor(private _http:Http){
		
	}
	
	getAllVideos(query){
		return this._http.get(`${BASE_URL}?q=${query}&part=snippet&key=${API_TOKEN}`)
			.map((res:Response) => res.json())
			.map(json => json.items);
	}
	
}