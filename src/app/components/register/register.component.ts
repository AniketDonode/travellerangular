import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  name;
  form = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('')
  });


  public get value() {
    this.name = this.form.get('username')?.value
    return this.form.get('username')?.value;

  }
  public  updateUserName(){
    console.log("hello")
    console.log(this.value +" this is username")
  }
  onSubmit()
  {
    if(this.form.valid)
    {
      console.log(JSON.stringify(this.form.value));

    }
    else{
      console.log("error")
    }

  }

}
