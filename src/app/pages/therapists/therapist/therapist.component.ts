import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'therapist',
	templateUrl: './therapist.component.html',
	styleUrls: [ './therapist.component.scss' ]
})
export class TherapistComponent {
	@Input() imgUrl: string;
	@Input() description: string;
	@Input() name: string;
}
