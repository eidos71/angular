/**
 * Created by blackswam on 18/04/16.
 */

import { Component } from 'angular2/core';
import { Config } from './config.service';
@Component({
    selector: 'my-app',
    template: '<h1 class="jumbotron">{{tittle}}</h1>'
})

export class AppComponent {
    tittle=Config.TITLE_PAGE;

}

