import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: any
  email: any
  mouseoverLogin: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(loginForm: any) {

    this.authService.login(loginForm.email, loginForm.password);

    if (this.authService.isLoggedIn$)
      this.router.navigate(['/contacts']);
  }

  cancel() {
    this.router.navigate(['/contacts']);
  }
}
