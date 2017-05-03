import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonInputComponent } from './person-input/person-input.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PersonListComponent } from './person-list/person-list.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';

import { people } from "./reducers/people";
import { filter } from "./reducers/filter";

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent,
    FilterSelectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ people, filter }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
