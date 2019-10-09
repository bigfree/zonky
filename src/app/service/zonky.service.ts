import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ZonkyService {

	private zonkyURL = 'https://api.zonky.cz/loans/marketplace';

	constructor(private http: HttpClient) { }

	getLoans(rating: string) {
		return this.http.get(`${this.zonkyURL}?fields=amount&rating__in=[${rating}]`, {
			headers: {
				'X-Page': '0',
				'X-Size': '100'
			}
		});
	}
}
