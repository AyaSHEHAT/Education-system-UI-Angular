import { Component } from '@angular/core';
import { AccountService } from '../../_Services/account.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string=''
  pass:string=''
  constructor(private accountServ:AccountService, public router: Router){}
  login(){
    this.accountServ.login(this.username,this.pass);
    this.router.navigateByUrl("/home")
  }
}
