import { Router } from '@angular/router';
import { UserService } from './../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }
  user: any = {userName: '', password: ''};
  error: string;
  ngOnInit() {
  }
  public doLogin(): void {
    const result = this.userService.getAuth(this.user as User);
    if (result) {
        this.router.navigate(['/dashboard']);
    }else {
        this.error = '账号yldengw，密码123';
    }
  }

}
