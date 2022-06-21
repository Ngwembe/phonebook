import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  public searchTerm!: string;
  public contacts?: Contact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getAllContacts().subscribe(result => {
      this.contacts = result;
    }, error => console.error(error));
  }

}
