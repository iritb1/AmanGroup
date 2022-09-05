import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const regex = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.username.length === 0) 
    {
      alert("Please enter a username")
      return;
    }
    if (this.password.length === 0) 
    {
      alert("Please enter a password")
      return;
    }
    if (regex.test(this.password))
    {
      alert("Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
      return;
    }
    
    this.router.navigateByUrl('/jokes');
  }

}
