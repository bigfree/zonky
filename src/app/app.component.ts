import { Component, OnInit } from '@angular/core';

import { ZonkyService } from './service/zonky.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	title = 'zonky-test';

	public amountRes = -1;
	public form = {
		rating: ''
	};

	constructor(private zonkyService: ZonkyService) {
	}

	ngOnInit(): void {
	}

	averageAmount(loans: any): number {
		const loansCount = loans.length;
		let allAmounts = 0;

		loans.map(({ amount }) => allAmounts = allAmounts + amount);

		return allAmounts / loansCount;
	}

	onSubmit() {
		if (!this.form.rating) {
			return false;
		}

		this.zonkyService
			.getLoans(this.form.rating)
			.subscribe(res => this.amountRes = this.averageAmount(res));
	}
}
