import { MatDialogRef } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  form: FormGroup;
  name: string | undefined;



  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authSVC: LoginService,
    public dialogRef: MatDialogRef<LoginComponent>
  ) {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      })
    }

    ngOnInit(): void {

    }

    get Email() {
      return this.form.get('email');
    }

    get Password() {
      return this.form.get('password');
    }



    onSubmit(event: Event) {
      if(this.form.invalid) {
        return alert('data wrong');
      }
      event.preventDefault;

      this.authSVC
        .login(this.form.value)
        .subscribe((_data) => {
          this.route.navigate(['/dashboard'])
        })
    }

    handleClear() {
      this.name = '';
    }

    closeDialog(): void {
      this.dialogRef.close(LoginComponent);
    }

}
