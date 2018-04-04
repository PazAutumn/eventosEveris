import { Component, OnInit, EventEmitter, Inject, Optional } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../auth.service';
import * as $ from 'jquery';

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

      $(".btn").click(function(){
        var welcome = $('.welcome');
          welcome.attr('style', 'display: none');
          console.log(welcome);
        var backspace = $(".backspace");
          backspace.css('height', '2rem');
          console.log(backspace);
        });
  }

  onRegister() {
    this.authService.signup(this.userForm.value.email, this.userForm.value.password)
  }

}
