import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import UserService from "../services/user.service";
import {Router} from "@angular/router";
import User from "../models/User";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  onSubmitForm(){
    const form = this.userForm.value;
    const newUser = new User(form.firstName, form.lastName, form.email, form.drinkPreference, form.hobbies ? form.hobbies : []);
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getHobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby(){
    const newHobyControl = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobyControl);
  }
}
