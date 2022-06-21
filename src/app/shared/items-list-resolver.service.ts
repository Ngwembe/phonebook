import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { ContactsService } from '../services/contacts.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsListResolverService implements Resolve<any> {

  constructor(private contactsService: ContactsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.contactsService.getAllContacts()
      .pipe(map(contacts => contacts));
  }
}
