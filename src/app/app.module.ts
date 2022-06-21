import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { CreateContactComponent } from './contacts/create-contact/create-contact.component';
import { UpdateContactComponent } from './contacts/update-contact/update-contact.component';
import { CollapsibleWellComponent } from './common//collapsible-well/collapsible-well.component';
import { ListContactsComponent } from './contacts/list-contacts/list-contacts.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './user/login/login.component';
import { NotFoundErrorComponent } from './errors/not-found-error/not-found-error.component';

import { appRoutes } from './contacts/routes';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ContactsService } from './services/contacts.service';
import ItemRouteActivator from './contacts/list-contacts/item-route-activator.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    UpdateContactComponent,
    CollapsibleWellComponent,
    ListContactsComponent,
    ContactDetailsComponent,
    NavbarComponent,
    LoginComponent,
    NotFoundErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),

    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [WeatherService, AuthService, ContactsService,
    ItemRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateContactComponent) {
  if (component.isFormDirty)
    return window.confirm('You have not saved the event, do you want really want to discard the changes and cancel?');

  return true;
}
