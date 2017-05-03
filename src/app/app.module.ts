import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonInputComponent } from './person-input/person-input.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PersonListComponent } from './person-list/person-list.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent,
    FilterSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
       maxAge: 5
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
