import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  // password: any
  firstName!: FormControl
  lastName!: FormControl
  // mouseoverLogin: boolean = false;
  profileForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated();

    this.firstName = new FormControl(this.authService.currentUser?.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser?.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  updateContact(updateForm: any) {
    if (this.profileForm.invalid)
      return;

    this.authService.updateProfile(updateForm.firstName, updateForm.lastName);

    this.isAuthenticated();
  }

  private isAuthenticated() {
    if (!this.authService.isAuthenticated())
      this.router.navigate(['/contacts']);
  }

  validateFirstName(): boolean {
    return (this.firstName.valid || this.firstName?.untouched); // || (mouseoverLogin && profileForm.invalid)
  }

  validateLastName(): boolean {
    return (this.lastName.valid || this.lastName?.untouched); // || (mouseoverLogin && profileForm.invalid)
  }

  cancel() {
    this.router.navigate(['/contacts']);
  }
}
