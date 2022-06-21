import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../../models/Contact';
import { AuthService } from '../../services/auth.service';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  isFormDirty: boolean = true;

  // password: any
  firstName!: FormControl
  lastName!: FormControl
  phoneNumber!: FormControl
  createForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService, private contactService: ContactsService) { }

  ngOnInit(): void {
    this.isAuthenticated();

    this.firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.phoneNumber = new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]);
    //this.phoneNumber = new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{12}")]);

    this.createForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber
    });
  }

  createContact(createForm: any) {
    if (this.createForm.invalid)
      return;

    let contact: Contact = {
      contactId: 0,
      personId:0,
      phoneNumber: createForm.phoneNumber,
      owner: {
        personId:0,
        firstName: createForm.firstName,
        lastName: createForm.lastName
      }
    };

    

    this.contactService.createContact(contact).subscribe(res => {
      console.log({ res });

      this.isAuthenticated();
      this.router.navigate(['/contacts']);
    });    
  }

  private isAuthenticated() {
    if (!this.authService.isAuthenticated())
      this.router.navigate(['/user/profile/login']);
  }

  validateFirstName(): boolean {
    return (this.firstName.valid || this.firstName?.untouched); // || (mouseoverLogin && profileForm.invalid)
  }

  validateLastName(): boolean {
    return (this.lastName.valid || this.lastName?.untouched); // || (mouseoverLogin && profileForm.invalid)
  }

  validatePhoneNumber(): boolean {
    return (this.phoneNumber.valid || this.phoneNumber?.untouched); // || (mouseoverLogin && profileForm.invalid)
  }

  cancel() {
    this.isAuthenticated();
    this.router.navigate(['/contacts']);
  }
}
