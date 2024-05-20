import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(private accountServ:AccountService, public router: Router) { }
  ngOnInit(): void {
    this.accountServ.isLogged=false;
    localStorage.removeItem("token");
    this.accountServ.user.isAdmin=false;
    this.accountServ.user.username='';
    this.router.navigateByUrl("/login");
  }
}
