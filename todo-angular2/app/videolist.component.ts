/**
 * Created by blackswam on 21/04/16.
 */
import {Component, EventEmitter} from 'angular2/core';
import {Video} from "./video.model";
import {selectValueAccessor} from "angular2/src/common/forms/directives/shared";
@Component(
    {
        selector:'video-list',
        templateUrl: 'app/html/videolist.component.html',
        inputs: ['videos']
    }
)
export class VideoListComponent {
    selectVideo= new EventEmitter();
    onSelect(vid: Video) {
        console.log(JSON.stringify(vid));
        this.selectVideo.emit(vid);
    }

}
