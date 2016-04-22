/**
 * Created by blackswam on 18/04/16.
 */

import { Component } from 'angular2/core';
import { Config } from './config.service';
import { Video } from './video.model';
import {VideoListComponent} from './videolist.component'
@Component({
    selector: 'my-app',
    template: `<h1 class="jumbotron">
                {{tittle}}</h1>
                <video-list [videos]="videos">
                </video-list>
`,
    directives:[VideoListComponent]
})

export class AppComponent {
    tittle=Config.TITLE_PAGE;
    videos: Array<Video>;
    constructor(){
        this.videos=[
        new Video(1,"Video","www.test.org","Description that is optional"),
            new Video(2,"Video2","www.test.org","Description that is optional")
        ]
    }


}

