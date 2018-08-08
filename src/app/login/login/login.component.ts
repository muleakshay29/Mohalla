import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../Service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbAlertConfig]
})
export class LoginComponent implements OnInit {

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  loginForm: FormGroup;
  successUrl: string;
  unsuccessUrl: string;
  loginCheck: any;

  constructor(
    private AuthenticationService: AuthenticationService,
    private router: Router,
    private alertConfig: NgbAlertConfig,
    private route: ActivatedRoute) {  }

  ngOnInit() {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
                    Validators.required, 
                    Validators.minLength(2)
                  ])
    });

    this.AuthenticationService.logout();

    this.successUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    this.unsuccessUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  loginSubmit()
  {
    if(this.loginForm.valid)
    {
      const username = this.loginForm.controls.username.value;
      const password = this.loginForm.controls.password.value;

      this.AuthenticationService.login(username, password)
      .subscribe( (loginCheck) => this.checkLogin(loginCheck) );
    }
  }

  checkLogin(data)
  {
    if(data === 1)
    {
      this.alertConfig.type = 'success';
      this._success.next(`Login successful`);
      this.router.navigate([this.successUrl]);
    }
    else
    {
      this.alertConfig.type = 'danger';
      this._success.next(`Invalid User`);
      this.router.navigate([this.unsuccessUrl]);
    }
  }

}
