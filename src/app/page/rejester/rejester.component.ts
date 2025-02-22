import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiCallService } from '../../servise/api-call.service';
import { MatError, MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../model/User';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rejester',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatError, MatFormField, MatInputModule, MatIconModule, CommonModule],
  templateUrl: './rejester.component.html',
  styleUrls: ['./rejester.component.scss']
})
export class RejesterComponent implements OnInit {
  registerForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl('', [Validators.required, Validators.min(10)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^09\d{9}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private apiService: ApiCallService,
    private toastr: ToastrService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }


  onSubmit() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.apiService.getUser().subscribe(
        (users: User[]) => {
          const existingUser = users.find(existing => existing.userName === user.userName || existing.email === user.email);

          if (existingUser) {

            this.toastr.error('کاربر با این مشخصات قبلاً ثبت‌نام کرده است.', 'خطا');
          } else {

            this.sendUser(user);
            this.toastr.success('کاربر با موفقیت ثبت شد.', 'موفق');
            this.router.navigate(['./login'])

          }
         
        },
        (error) => {
          console.error('خطا در دریافت کاربران:', error);
        }
      );
    } else {
      console.error('فرم نامعتبر است.');
      this.toastr.error('فرم رو لطفا تکمیل نمایید.', 'ناموفق');
    }
  }

  getUsers() {
    this.apiService.getUser().subscribe(
      (data) => {
        console.log('دریافت لیست کاربران:', data);
      },
      (error) => {
        console.error('خطا در دریافت کاربران:', error);
      }
    );
  }


  sendUser(user: any) {
    this.apiService.postUser(user).subscribe(
      () => {
        console.log('کاربر با موفقیت ثبت شد.');

      },
      (error) => {
        console.error('خطا در ثبت کاربر:', error);
      }
    );
  }
}
