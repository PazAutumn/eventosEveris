import { Component, OnInit, EventEmitter, Inject, Optional } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, public authService: AuthService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  onRegister() {
    this.authService.signup(this.userForm.value.email, this.userForm.value.password)
  }

}
