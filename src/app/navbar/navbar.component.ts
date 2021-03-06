import { Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent {
	@ViewChild('toggler', { static: false })
	toggler;
	@ViewChildren('a') links;

	ngAfterViewInit() {}

	closeSidebar() {
		this.toggler.nativeElement.checked = false;
	}
}
