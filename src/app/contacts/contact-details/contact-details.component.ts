import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editContact(contactId: number | undefined) {

    let route = `contacts/edit/${contactId}`;
    console.log({ route });

    this.router.navigate([route]);
  }

}
