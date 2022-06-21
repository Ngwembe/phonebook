import { Routes } from '@angular/router';
import { NotFoundErrorComponent } from '../errors/not-found-error/not-found-error.component';
import { ItemsListResolverService } from '../shared/items-list-resolver.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import ItemRouteActivator from './list-contacts/item-route-activator.service';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

export const appRoutes: Routes = [
  { path: '404', component: NotFoundErrorComponent },
  {
    path: 'contacts/new',
    component: CreateContactComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'contacts/new/:id',
    component: CreateContactComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  { path: 'contacts', component: ListContactsComponent, resolve: { contacts: ItemsListResolverService } },
  { path: 'contacts/:id', component: ContactDetailsComponent, canActivate: [ItemRouteActivator] },
  {
    path: 'contacts/edit/:id',
    component: UpdateContactComponent,
    //canActivate: [ItemRouteActivator]
    //canDeactivate: ['canDeactivateCreateEvent']
  },
  { path: '', redirectTo: '/user/profile/login', pathMatch: 'full' },
  //{ path: '', redirectTo: '/contacts', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () => import('../account/account.module').then(module => module.AccountModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../user/user.module').then(module => module.UserModule)
  },

  // { path: 'user', loadChildren: './user/user.module#UserModule'}
]
