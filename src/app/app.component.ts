import { Component } from '@angular/core';
import { Store, provideStore } from '@ngrx/store';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public people;
	private id = 0;

	constructor(
		private _store : Store<any>
	){
		this.people = Observable.combineLatest(
			_store.select('people'),
			_store.select('filter'),
			(people : any[], filter: any) => {
				return people.filter(filter);
			}
		)
	}

	addPerson(name){
		this._store.dispatch({type: "ADD_PERSON", payload: {
			id: ++this.id,
			name,
			guests: 0,
			attending: false
		}})
	}

	addGuest({id}){
		this._store.dispatch({type: "ADD_GUESTS", payload: id});
	}

	removeGuest({id}){
		this._store.dispatch({type: "REMOVE_GUESTS", payload: id});
	}

	removePerson({id}){
		this._store.dispatch({type: "REMOVE_PERSON", payload: id});
	}


	toggleAttending({id}){
		this._store.dispatch({type: "TOGGLE_ATTENDING", payload: id});
	}

	updateFilter(filter){
		this._store.dispatch({type: filter});
	}
}
