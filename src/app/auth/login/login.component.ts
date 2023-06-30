import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name: any;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  imagePath: string = 'assets/Logo.svg';
  loading: boolean = false;

  type = 'password';
  constructor(
    private auth: AuthserviceService,
    private router: Router // formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    console.log(this.form.value);
  }

  loginProcess(e: any) {
    e.preventDefault();
    this.loading = true;

    console.log(this.form.value);
    if (this.form.valid) {
      this.auth.login(this.form.value).subscribe((result) => {
        if (result.success) {
          console.log(result);
          alert(result.message);
        } else alert(result.message);
      });
    }
  }
}
