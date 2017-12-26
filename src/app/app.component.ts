import { UserService } from './shared/service/user.service';
import { Component, HostListener, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/merge';
import { Message } from 'primeng/primeng';
import { TranslateService } from 'ng2-translate';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	isSingle: boolean;
	public msgs: Message[] = [];
    constructor(
		private userService: UserService,
		private translate: TranslateService

    ) {

	}
    ngOnInit() {
        this.userService.populate();
        this.userService.isAuthenticated.subscribe(
            (isAuthenticated) => {
                this.isSingle = !isAuthenticated;
            });
        this.translate.addLangs(['zh', 'en']);
        this.translate.setDefaultLang('zh');
        const browserLang = this.translate.getBrowserLang();
        console.log('检测到的浏览器语言>' + browserLang);
        this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'en');
    }
}