import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactsService } from '../../services/contacts.service';

@Injectable({
  providedIn: 'root'
})
export default class ItemRouteActivator implements CanActivate {

  constructor(private contactsService: ContactsService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const itemExists = !!this.contactsService.getContactByContactId(route.params['id']);

    if (!itemExists)
      this.router.navigate(['/404'])

    return itemExists;
  }
}
