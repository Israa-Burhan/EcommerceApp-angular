import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _AuthService: AuthService) {}
  isLogin: boolean = false;
  userInfo: any = {};

  logout() {
    this._AuthService.signOut();
  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null) {
          this.isLogin = true;
          this.userInfo = this._AuthService.userData;
          console.log(this.userInfo.getValue().firstName);
        } else {
          this.isLogin = false;
        }
      },
    });
  }
}
